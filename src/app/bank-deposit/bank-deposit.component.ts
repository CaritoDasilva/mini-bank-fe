import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BankOprations } from '../models/bank-oprations.model';
import { BankOperationsService } from '../services/bank-operations.service';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.component.html',
  styleUrls: ['./bank-deposit.component.scss']
})
export class BankDepositComponent implements OnInit {
  formContent: any;

  constructor(public route: ActivatedRoute, private bankOperationsService: BankOperationsService) {
    this.bankOperationsService.getFormContent().subscribe(data => {
      this.formContent = data;
    })

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }








}
