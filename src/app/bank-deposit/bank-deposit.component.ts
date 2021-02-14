import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.component.html',
  styleUrls: ['./bank-deposit.component.scss']
})
export class BankDepositComponent implements OnInit {
  depositForm: FormGroup;
  constructor() {
    this.depositForm = new FormGroup({
      amount: new FormControl(0, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  updateAmount(form: FormGroup, e: Event) {
    console.log("🚀 ~ file: bank-deposit.component.ts ~ line 21 ~ BankDepositComponent ~ updateAmount ~ form", form)

  }

}
