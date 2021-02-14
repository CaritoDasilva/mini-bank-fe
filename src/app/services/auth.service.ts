import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // headers: HttpHeaders
  constructor(private http: HttpClient) {

  }


  registerClient(clientData: Client) {
    return this.http.post('http://localhost:8000/api/clients/new', clientData);
  }

  loginClient(rut: string, password: string) {
    const headers = new HttpHeaders({ "Authorization": password })
    return this.http.get(`http://localhost:8000/api/clients/${rut}`, { headers: headers });
  }
}
