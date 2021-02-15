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
    return this.http.post('http://18.222.204.233/api/clients/new', clientData);
  }

  loginClient(rut: string, password: string) {
    const headers = new HttpHeaders({ "Authorization": password })
    return this.http.get(`http://18.222.204.233/api/clients/${rut}`, { headers: headers });
  }
}
