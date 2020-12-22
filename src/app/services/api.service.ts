import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    return this.httpClient.get<any[]>(this.apiURL + '/user')
  }

  public register(userData) {
    return this.httpClient.post<{token: string}>(this.apiURL + '/register', userData)
  }
}
