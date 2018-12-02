import { Injectable } from '@angular/core';
import {Order} from '../classes/order';
import {CourierService} from './courier.service';
import {CustomerService} from './customer.service';
import {MenuService} from './menu.service';
import {Menu} from '../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[];

  constructor(private courierService: CourierService,
  private customerService: CustomerService,
  private menuService: MenuService) {
    this.orders = [
      {
        id: 1,
        menus: [
          this.menuService.getMenu(1),
          this.menuService.getMenu(4)
        ],
        customer: this.customerService.getCustomer(2),
        courier: this.courierService.getCourier(1),
        dateOfOrder: new Date('2018-11-12T13:30'),
        dateOfCompletion: null,
        cost: 2000
      } as Order,
      {
        id: 2,
        menus: [
          this.menuService.getMenu(2),
          this.menuService.getMenu(3),
          this.menuService.getMenu(4)
        ],
        customer: this.customerService.getCustomer(3),
        courier: this.courierService.getCourier(2),
        dateOfOrder: new Date('2018-10-22T10:00'),
        dateOfCompletion: new Date('2018-10-22T12:10'),
        cost: 2490
      } as Order
    ];
  }

  public getOrders(): Order[] {
    return this.orders;
  }

  public getOrder(id: Number): Order {
    return this.orders.find((order: Order) => order.id === id);
  }

  public saveOrder(order: Order): void {
    this.orders.push(order);
  }
}
