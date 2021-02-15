import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
    this.isLogged = new BehaviorSubject<boolean>(false);

  }

  getIsLogged() {
    return this.isLogged.asObservable();
  }

  setisLogged() {
    this.isLogged.next(!localStorage.getItem('user') ? false : true);
  }


  registerClient(clientData: Client) {
    return this.http.post('http://18.222.204.233/api/clients/new', clientData);
  }

  loginClient(rut: string, password: string) {
    const headers = new HttpHeaders({ "Authorization": password })
    return this.http.get(`http://18.222.204.233/api/clients/${rut}`, { headers: headers });
  }
}
