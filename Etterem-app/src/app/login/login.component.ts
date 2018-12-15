import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private message: String;
  private loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
  ) { }

  async ngOnInit() {
  }

  private async onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.message = 'Sikertelen bejelentkezés!';
    }
  }
}
