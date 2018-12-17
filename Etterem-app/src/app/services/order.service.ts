import { Injectable } from '@angular/core';
import {Order} from '../classes/order';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private httpService: HttpService;
  private authService: AuthService;
  private id: Number;
  private route: String;

  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
    private router: Router
    ) {
    try {
      this.httpService = _httpService;
      this.authService = _authService;
      this.id = this.authService.customer.id;
      this.route = 'customers/' + this.id + '/orders';
    }
    catch(e) {}
  }

  public getOrders(): Promise<Order[]> {
   // return this.httpService.get<Order[]>(this.route + '/' + customerMail);
    this.id = this.authService.customer.id;
    this.route  = 'customers/' + this.id + '/orders';
    return this.httpService.get<Order[]>(this.route);
  }
  public saveOrder(order: Order): Promise<Order> {
    return this.httpService.post<Order>(this.route, order);
  }

  public getAdminOrders(): Promise<Order[]> {
    return this.httpService.get<Order[]>('orders');
  }
}
