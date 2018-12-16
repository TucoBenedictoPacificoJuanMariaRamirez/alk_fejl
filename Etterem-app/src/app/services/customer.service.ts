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
  ) { }
  
  public getCustomer(id: Number): Promise<Customer> {
    //return this.customers.find((customer: Customer) => customer.id === id);
    return this.httpService.get<Customer>(this.route + '/' + id);
  }

  public getCustomers(): Promise<Customer[]> {
    //return this.customers;
    return this.httpService.get<Customer[]>(this.route);
  }

  public modifyCustomer(newC:Customer):Promise<Customer>{
    return this.httpService.patch<Customer>(this.route + '/' + newC.id,newC);
  }
  
}
