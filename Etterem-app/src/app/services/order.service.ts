import { Injectable } from '@angular/core';
import {Order} from '../classes/order';
import {CourierService} from './courier.service';
import {CustomerService} from './customer.service';
import {MenuService} from './menu.service';

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
          this.menuService.getMenus(1),
          this.menuService.getMenus(4)
        ],
        customer: this.customerService.getCustomers(2),
        courier: this.courierService.getCouriers(1),
        dateOfOrder: new Date('2018-11-12T13:30'),
        dateOfCompletion: new Date(''),
        cost: 2000
      } as Order,
      {
        id: 2,
        menus: [
          this.menuService.getMenus(2),
          this.menuService.getMenus(3),
          this.menuService.getMenus(4)
        ],
        customer: this.customerService.getCustomers(3),
        courier: this.courierService.getCouriers(2),
        dateOfOrder: new Date('2018-10-22T10:00'),
        dateOfCompletion: new Date('2018-10-22T12:10'),
        cost: 2490
      } as Order
    ];
  }

  public getOrders(): Order[] {
    return this.orders;
  }
}
