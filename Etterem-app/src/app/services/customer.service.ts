import { Injectable } from '@angular/core';
import {Customer, Roles} from '../classes/customer';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private route: string = 'customers';
  private customers: Customer[];
  constructor(
    private httpService: HttpService
  ) {
    /*
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
    */
  }
  
  public getCustomer(id: Number): Promise<Customer> {
    //return this.customers.find((customer: Customer) => customer.id === id);
    return this.httpService.get<Customer>(this.route + '/' + id);
  }

  public getCustomers(): Promise<Customer[]> {
    //return this.customers;
    return this.httpService.get<Customer[]>(this.route);
  }

  public modifyCustomer(oldC: Customer, newC:Customer):Promise<Customer>{
    return this.httpService.patch<Customer>(this.route,newC);
  }
  
}
