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

  constructor(private httpClient: HttpClient) { 

  }

  public getUserData() {
    return this.httpClient.get<any[]>(environment.apiURL + '/user')
  }

  public register(userData) {
    return this.httpClient.post<{token: string}>(environment.apiURL + '/register', userData)
  }
}
