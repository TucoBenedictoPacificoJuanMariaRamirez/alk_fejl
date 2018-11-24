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
  private displayedColumns = ['id', 'customer', 'courier', 'date_of_order', 'date_of_completion', 'cost'];

  constructor(private orderService: OrderService) {  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
