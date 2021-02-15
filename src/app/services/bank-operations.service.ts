import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account, Historial } from '../models/account.model';
import { BankOprations } from '../models/bank-oprations.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankOperationsService {
  private formContent: BehaviorSubject<BankOprations>;
  rutClient: string | null;
  private accountDetail: BehaviorSubject<Account>;
  constructor(private http: HttpClient) {
    this.formContent = new BehaviorSubject<BankOprations>(new BankOprations(1))
    this.accountDetail = new BehaviorSubject<Account>(new Account('', 0, []))
    this.rutClient = localStorage.getItem('user')
  }

  getFormContent() {
    return this.formContent.asObservable();
  }

  setFormContent(form: BankOprations) {
    this.formContent.next(form)
  }



  updateClientAccount(form: BankOprations) {
    const url = `http://18.222.204.233/api/accounts/update/${this.rutClient}/`;
    return this.http.put(url, form);
  }

  updateClientAccountByTransfer(form: BankOprations) {
    return this.http.put('http://18.222.204.233/api/accounts/transfer', form);
  }

  getAccountByRut() {
    const url = `http://18.222.204.233/api/accounts/${this.rutClient}`
    return this.http.get(url)
      .pipe(
        map((data) => {
          this.setAccount(data)
          return data;
        }), catchError(error => error)
      )

  }

  setAccount(account: any) {
    this.accountDetail.next(account);
  }

  getAccount() {
    return this.accountDetail.asObservable()
  }
}
