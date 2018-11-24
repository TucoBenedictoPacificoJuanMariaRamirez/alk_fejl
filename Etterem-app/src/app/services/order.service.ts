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

  private courierService: CourierService;

  private customerService: CustomerService;

  private menuService: MenuService;

  constructor() {
    this.orders = [
      {
        id: 1,
        menus: [
          this.menuService.getMenus(1),
          this.menuService.getMenus(4)
        ],
        customer: this.customerService.getCustomers(2),
        courier: this.courierService.getCouriers(1)
      } as Order,
      {
        id: 1,
        menus: [
          this.menuService.getMenus(2),
          this.menuService.getMenus(3),
          this.menuService.getMenus(4)
        ],
        customer: this.customerService.getCustomers(3),
        courier: this.courierService.getCouriers(2)
      } as Order
    ];
  }

  public getOrders(): Order[] {
    return this.orders;
  }
}
