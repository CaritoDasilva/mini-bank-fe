import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-bank-fe';
  openSidenav: boolean;

  constructor() {
    this.openSidenav = true;
  }
}
