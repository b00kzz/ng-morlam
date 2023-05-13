import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;
// const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private http: HttpClient
  ) { }
  async getUsernamePassword(username: any, password: any): Promise<Response>{
    ////////////////
    const httpOptions = {
      method: 'POST',
      Headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
    const response = fetch(API_ENDPOINT.concat('/login'), httpOptions);
    const data = (await response).json();
    // console.log(data);
    return data
  }

  signUp(username: string, password:string,nickname:string,email:string): Promise<Response>{
    const httpOptions = {
      method: 'POST',
      Headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        username: username,
        password: password,
        nickname: nickname,
        email: email
      })
    };
    
    const response = fetch(API_ENDPOINT.concat('/register'), httpOptions);
    return response;
  }
}
