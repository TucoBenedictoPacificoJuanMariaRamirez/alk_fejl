import { Component, OnInit } from '@angular/core';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: '../orders/orders.component.html',
  styleUrls: ['../orders/orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  private displayedColumns = ['id', 'customer', 'courier', 'dateOfOrder', 'dateOfCompletion', 'cost'];

  constructor(private orderService: OrderService) {  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
