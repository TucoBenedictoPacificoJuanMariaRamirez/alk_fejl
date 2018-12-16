import { Injectable } from '@angular/core';
import {Order} from '../classes/order';
import {CourierService} from './courier.service';
import {CustomerService} from './customer.service';
import {MenuService} from './menu.service';
import {Menu} from '../classes/menu';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private id: Number = this.authService.customer.id;
  private route: String = 'customers/' + this.id +'/orders';
  //private orders: Order[];

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
    // private courierService: CourierService,
    //private customerService: CustomerService,
    // private menuService: MenuService
    ) { }

  //public getOrders(): Promise<Order[]>{
    //return this.orders;
    //return this.httpService.get<Order[]>(this.route);
  //}

  public getOrders(customerMail): Promise<Order[]>{
   // return this.httpService.get<Order[]>(this.route + '/' + customerMail);
   return this.httpService.get<Order[]>(this.route)//todo
  }
/*
  public getOrder(id: Number): Promise<Order> {
    return this.httpService.get<Order>(this.route + '/' + id)//todo
  }
*/
  public saveOrder(order: Order): Promise<Order> {
    return this.httpService.put<Order>(this.route,order);
  }

}
