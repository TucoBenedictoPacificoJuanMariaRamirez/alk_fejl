import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Customer, Roles} from '../classes/customer';
import {HttpService} from '../services/http.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private message: String;
  private httpService: HttpService;

  private regForm = this.fb.group( {
    fullname: [''],
    email: [''],
    address: [''],
    phone: [''],
    password: ['']
  });
  constructor(private fb: FormBuilder, private _httpService: HttpService) {
    this.httpService = _httpService;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  addressFormControl = new FormControl('', [
    Validators.required
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();


  async ngOnInit() {
  }

  private async onSubmit() {
    let newCustomer = {
      email: this.regForm.get('email').value,
      fullname: this.regForm.get('fullname').value,
      address: this.regForm.get('address').value,
      phone: this.regForm.get('phone').value,
      password: this.regForm.get('password').value,
      role: Roles.ROLE_CUSTOMER.toString()
    };
    try {
      await this.httpService.post('register', newCustomer);
      this.message = 'Sikeres regisztráció!';
    }
    catch(e) {
      this.message = 'Sikertelen regisztráció!';
    }
  }

}
