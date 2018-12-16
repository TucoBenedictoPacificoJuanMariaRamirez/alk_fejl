import { Component, OnInit } from '@angular/core';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: '../orders/orders.component.html',
  styleUrls: ['../orders/orders.component.css']
})
export class OrdersComponent implements OnInit {
  private _orders: Order[];
  private displayedColumns = ['id', 'customer', 'courier', 'dateOfOrder', 'dateOfCompletion', 'cost'];

  constructor(
    private _orderService: OrderService
    ) {  }

  async ngOnInit() {
    // this._orders = this._orderService.getOrders();
    this._orders = await this._orderService.getAdminOrders();
  }

}
