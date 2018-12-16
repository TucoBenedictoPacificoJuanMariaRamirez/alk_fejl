import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private _orders: Order[];
  private displayedColumns = ['id', 'customer', 'courier', 'dateOfOrder', 'dateOfCompletion', 'cost'];

  constructor(
      private _orderService: OrderService,
      private _authService: AuthService
  ) { }

  async ngOnInit() {
    this._orders = await this._orderService.getOrders(this._authService.customer.email);
  }
}
