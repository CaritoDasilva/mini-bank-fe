import { Component, OnInit } from '@angular/core';
import { BankOperationsService } from '../services/bank-operations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  accountDetail: any
  constructor(private bankOperationsService: BankOperationsService) {
    // this.bankOperationsService.getAccount().subscribe(data => {
    //   this.accountDetail = data;
    // })
    this.getAccountInService()
    console.log("🚀 ~ file: dashboard.component.ts ~ line 14 ~ DashboardComponent ~ this.bankOperationsService.getAccount ~ this.accountDetail", this.accountDetail)
  }

  ngOnInit(): void {
  }
  getAccountInService() {
    this.bankOperationsService.getAccountByRut().subscribe((data: any) => {
      if (data) {
        this.accountDetail = data?.account;
        console.log("🚀 ~ file: dashboard.component.ts ~ line 22 ~ DashboardComponent ~ this.bankOperationsService.getAccountByRut ~ data", this.accountDetail)

      }

    })

  }

  getOperationType(type: string) {
    let operationType;
    switch (type) {
      case 'withdrawal':
        operationType = 'Retiro';
        break;
      case 'deposit':
        operationType = 'Depósito';
        break;
      case 'transfer':
        operationType = 'Transferencia'
        break
    }
    return operationType
  }




}
