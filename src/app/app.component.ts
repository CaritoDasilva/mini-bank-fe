import { Component } from '@angular/core';
import { BankOprations } from './models/bank-oprations.model';
import { ActivatedRoute, NavigationStart, NavigationExtras, Router } from '@angular/router';
import { BankOperationsService } from './services/bank-operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-bank-fe';
  openSidenav: boolean;
  // formContentDeposit: 
  formContent: BankOprations | undefined;


  constructor(public router: Router, public route: ActivatedRoute, private bankOperationsService: BankOperationsService) {
    this.openSidenav = true;
    this.formContent = undefined;
  }

  goToForm(type_value: number) {
    this.formContent = new BankOprations(type_value);
    this.bankOperationsService.setFormContent(this.formContent);
    console.log("🚀 ~ file: app.component.ts ~ line 22 ~ AppComponent ~ goToForm ~ this.formContent", this.formContent)
    this.router.navigate(['/deposito']);
  }

  goToAccountDetail() {
    this.router.navigateByUrl('/dashboard')
  }
}
