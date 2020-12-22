import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  apiURL: string;

  constructor(public httpClient: HttpClient) {
    this.apiURL = "https://hashyourcash.herokuapp.com";
  }
 

  login(email: string, password: string) {
    let userInput = {
      "email": email,
      "password": password,
    }
    return this.httpClient.post<{token: string}>(this.apiURL + '/login', userInput);
  }

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    if(this.loggedIn()) {
      return this.user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

  public loggedIn(): boolean {
    let tokeninfo = this.getDecodedAccessToken(localStorage.getItem('access_token'));
    var currentTime = +new Date / 1000;
    if(tokeninfo && currentTime >= tokeninfo.exp) {
      this.logout();
      return false;
    }
    return localStorage.getItem('access_token') !== null;
  }

  

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
 
}
