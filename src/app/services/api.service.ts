import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //example: (nur zur Demonstration)
  public getSomeThing() {
    return this.httpClient.get<any>(environment.apiURL + '/somepath')
  }
}
