import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  //  * Get all admins
  getAllUsers(): Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/users'));
  }
  // delete1User(ID: any): Observable<any> {
  //   return this.http.delete(API_ENDPOINT.concat('/user/' + ID));
  // }
  delete1User(ID: any): Promise<Response> {
    return fetch(API_ENDPOINT.concat('/user/' + ID), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //getByid
  getByUserId(userid: any): Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/user/' + userid));
  }

  updateUser(userid: any, user: any): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.put<any>(API_ENDPOINT.concat('/user/' + userid), body, httpOptions)
  }
}

