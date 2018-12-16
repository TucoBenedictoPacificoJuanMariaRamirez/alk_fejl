import { Injectable } from '@angular/core';
import {Customer} from '../classes/customer';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {BucketService} from './bucket.service';
import {MenuService} from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public customer: Customer = null;
  private bucketService: BucketService;

  constructor(
      private httpService: HttpService,
      private router: Router,
      private _bucketService: BucketService
  ) {
    this.bucketService = this.bucketService;
}

  public async login(email: string, password: string): Promise<Customer> {
    try {
      const token = btoa(email + ':' + password);
      window.localStorage.setItem('token', token);
      const customer: Customer = await this.httpService.post('login', email) as Customer;
      this.isLoggedIn = true;
      this.customer = customer;
      //console.log(customer);
      return Promise.resolve(customer);
    } catch (e) {
      window.localStorage.setItem('token', '');
      console.error(e);
      return Promise.reject();
    }
  }

  public logout() {
    this.isLoggedIn = false;
    this.customer = null;
    window.localStorage.setItem('token', '');
    this._bucketService._menus = [];
    this.router.navigate(['/login']);
  }

  public loginWithToken() {
    const token = window.localStorage.getItem('token');
    const [email, password] = atob(token).split(':');
    this.login(email, password);
  }
}
