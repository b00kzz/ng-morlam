import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }
  async getTicketId(ticketid: any): Promise<Response> {
    ////////////////
    const httpOptions = {
      method: 'GET',
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const response = fetch(API_ENDPOINT.concat('/ticket/'+ ticketid), httpOptions);
    const data = (await response).json();
    return data
  }

  updateTicket(ticketid: any, ticket: any): Observable<any> {
    const body = JSON.stringify(ticket);
    return this.http.put<any>(API_ENDPOINT.concat('/ticket/' + ticketid), body, httpOptions)
  }

  addTicket(data: any): Promise<Response> {
    const httpOptions = {
      method: 'POST',
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    };

    const response = fetch(API_ENDPOINT.concat('/ticket'), httpOptions);
    return response;
  }

  deleteTicket(ticketid: any): Promise<Response> {
    return fetch(API_ENDPOINT.concat('/ticket/' + ticketid), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  getAllTicket(): Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/tickets'));
  }

}
