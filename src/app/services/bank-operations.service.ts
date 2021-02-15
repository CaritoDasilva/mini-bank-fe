import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BankOprations } from '../models/bank-oprations.model';

@Injectable({
  providedIn: 'root'
})
export class BankOperationsService {
  private formContent: BehaviorSubject<BankOprations>;
  constructor(private http: HttpClient) {
    this.formContent = new BehaviorSubject<BankOprations>(new BankOprations(1))
  }

  getFormContent() {
    return this.formContent.asObservable();
  }

  setFormContent(form: BankOprations) {
    this.formContent.next(form)
  }

  updateClientAccount(form: BankOprations) {
    const rutClient = localStorage.getItem('user')
    let url = `http://localhost:8000/api/accounts/update/${rutClient}/`;
    return this.http.put(url, form);
  }

  updateClientAccountByTransfer(form: BankOprations) {
    return this.http.put('http://localhost:8000/api/accounts/transfer', form);
  }
}
