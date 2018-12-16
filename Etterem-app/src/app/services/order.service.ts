import { Injectable } from '@angular/core';
import {Order} from '../classes/order';
import {CourierService} from './courier.service';
import {CustomerService} from './customer.service';
import {MenuService} from './menu.service';
import {Menu} from '../classes/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private route: String = 'orders';
  //private orders: Order[];

  constructor(
    private httpService: HttpService
    // private courierService: CourierService,
    //private customerService: CustomerService,
    // private menuService: MenuService
    ) { }

  public getOrders(): Promise<Order[]>{
    //return this.orders;
    return this.httpService.get<Order[]>(this.route);
  }

  public getOrders(customerMail): Promise<Order[]>{
    return this.httpService.get<Order[]>(this.route + '/' + customerMail);
  }

  public getOrder(id: Number): Promise<Order> {
    //return this.orders.find((order: Order) => order.id === id);
    return this.httpService.get<Order>(this.route + '/' + id)
  }

  public saveOrder(order: Order): Promise<Order> {
    //this.orders.push(order);
    return this.httpService.put<Order>(this.route,order);//???
  }

}
