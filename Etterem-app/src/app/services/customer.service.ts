import { Injectable } from '@angular/core';
import {Customer, Roles} from '../classes/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[];
  constructor() {
    this.customers = [
      {
        id: 1,
        email: 'admin@admin.admin',
        password: 'admin',
        fullname: 'Administrator',
        address: '',
        phone: '',
        role: Roles.ROLE_ADMIN
      } as Customer,
      {
        id: 2,
        email: 'habostorta@gmail.com',
        password: 'beka',
        fullname: 'Kukta Károly',
        address: '1000, Budapest, Mester utca 10',
        phone: '065045453455',
        role: Roles.ROLE_CUSTOMER
      } as Customer,
      {
        id: 3,
        email: 'vedogazascsomagolasok@gov.org',
        password: 'Ab123456789',
        fullname: 'Lakatos Imre',
        address: '4424 Szikszó, Mihály sétaút 75. 48. emelet',
        phone: '061333445566',
        role: Roles.ROLE_CUSTOMER
      } as Customer,
    ];
  }

  public getCustomers(id: Number): Customer {
    return this.customers.find((customer: Customer) => customer.id === id);
  }
}
