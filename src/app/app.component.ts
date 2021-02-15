import { Component } from '@angular/core';
import { BankOprations } from './models/bank-oprations.model';
import { ActivatedRoute, NavigationStart, NavigationExtras, Router } from '@angular/router';
import { BankOperationsService } from './services/bank-operations.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-bank-fe';
  openSidenav: boolean;
  name: string;
  formContent: BankOprations | undefined;
  isLogged: boolean;

  constructor(public router: Router, public route: ActivatedRoute, private authService: AuthService, private bankOperationsService: BankOperationsService) {
    this.openSidenav = true;
    this.formContent = undefined;
    this.isLogged = false;
    this.name = localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).name : ''
    this.authService.setisLogged()
  }

  ngOnInit() {
    this.getisLogged();

  }

  goToForm(type_value: number) {
    this.formContent = new BankOprations(type_value);
    this.bankOperationsService.setFormContent(this.formContent);
    this.router.navigate(['/deposito']);
  }

  getisLogged() {
    this.authService.getIsLogged().subscribe(data => {
      this.isLogged = data;
    });
  }


  goToAccountDetail() {
    this.router.navigateByUrl('/dashboard')
  }

  signOut() {
    localStorage.removeItem('user');
    this.authService.setisLogged()
    this.router.navigateByUrl('/');
  }
}
