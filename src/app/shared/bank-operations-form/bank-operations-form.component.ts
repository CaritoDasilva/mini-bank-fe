import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankOperationsService } from 'src/app/services/bank-operations.service';

@Component({
  selector: 'app-bank-operations-form',
  templateUrl: './bank-operations-form.component.html',
  styleUrls: ['./bank-operations-form.component.scss']
})
export class BankOperationsFormComponent implements OnInit {
  @Input() formContent: any
  depositForm: FormGroup;
  gralError: string;
  constructor(private bankOperationsService: BankOperationsService) {
    this.gralError = ''
    this.depositForm = new FormGroup({
      amount: new FormControl(null, Validators.required),
      destination_client_account: new FormControl('', this.formContent?.operation_type === 'transfer' ? Validators.required : Validators.nullValidator)
    })
    console.log("🚀 ~ file: bank-operations-form.component.ts ~ line 15 ~ BankOperationsFormComponent ~ constructor ~ this.depositForm", this.depositForm)


  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("🚀 ~ file: bank-operations-form.component.ts ~ line 13 ~ BankOperationsFormComponent ~ formContent", this.formContent)

  }



  async updateAmount(form: FormGroup, e: Event) {
    if (this.formContent?.operation_type === 'transfer') {
      this.bankOperationsService.updateClientAccountByTransfer({ ...this.formContent, amount_to_update: form.value.amount, destination_client_account: form.value.destination_client_account }).subscribe(data => {
        if (data) {
          this.depositForm.patchValue({ amount: null, destination_client_account: '' })
          return data;
        } else {
          return this.gralError = 'Operación fallida';
        }
      })

    } else {

      this.bankOperationsService.updateClientAccount({ ...this.formContent, amount_to_update: form.value.amount }).subscribe(data => {
        if (data) {
          this.depositForm.patchValue({ amount: null })
          return data;
        } else {
          return this.gralError = 'Operación fallida';
        }
      })

    }
  }

}
