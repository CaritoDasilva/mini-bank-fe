import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client, IFormLogin } from '../models/client.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  isLogin: boolean;
  gralError: string;
  hide = true;
  constructor(private authService: AuthService, public router: Router) {
    this.isLogin = true;
    this.gralError = ''
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      rut: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+-[0-9kK]{1}$/)]),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
    this.loginForm = new FormGroup({
      rut: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+-[0-9kK]{1}$/)]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  addClient(form: Client) {
    this.authService.registerClient(form).subscribe((data: any) => {
      if (data) {
        this.isLogin = true;
        return data;
      } else {
        return this.gralError = 'No se ha podido registrar cliente'
      }
    })

  }

  loginClient(form: IFormLogin) {
    this.authService.loginClient(form.rut, form.password).subscribe((data: any) => {
      if (data.client) {
        let user = {
          name: data.client.name,
          rut: data.client.rut,
          email: data.client.email
        }
        localStorage.setItem('user', JSON.stringify(user))
        this.authService.setisLogged();
        this.router.navigateByUrl("/dashboard");
        return data;
      } else {
        return this.gralError = 'No se ha podido ingresar a cuenta de cliente'
      }
    })
  }

  changeToLoginMode(value: boolean) {
    this.isLogin = value;
  }

}
