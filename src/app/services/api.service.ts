import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/* @AlexWirthAAU
    Service zum Abhandeln aller API-calls.
*/


export class ApiService {

  apiURL: string;

  constructor(private httpClient: HttpClient) { 
    this.apiURL = "https://hashyourcash.herokuapp.com";
  }

  public getUserData() {
    return this.httpClient.get<any[]>(this.apiURL + '/user', { headers: new HttpHeaders({'Authorization': localStorage.getItem('access_token')})})
  }

  public register(userData) {
    return this.httpClient.post<{token: string}>(this.apiURL + '/register', userData)
  }

  public getAllEmails() {
    return this.httpClient.get<any[]>(this.apiURL + '/user/emails')
  }

  public forgotpwRequest(email) {
    return this.httpClient.post<any>(this.apiURL + '/forgotpw/request', email)
  }
}
