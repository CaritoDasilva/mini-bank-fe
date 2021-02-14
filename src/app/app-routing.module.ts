import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BankDepositComponent } from './bank-deposit/bank-deposit.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'deposito', component: BankDepositComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
