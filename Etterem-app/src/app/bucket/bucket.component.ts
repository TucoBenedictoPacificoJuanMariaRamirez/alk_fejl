import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';
import {BucketService} from '../services/bucket.service';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {CustomerService} from '../services/customer.service';
import {CourierService} from '../services/courier.service';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { Courier } from '../classes/courier';
import {MenuCount} from '../classes/menu-count';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  private _order: Order;
  public _menus: MenuCount[];
  private itemsToDelete: Number[];
  private bucketService: BucketService;
  private authService: AuthService;
  private date: Date;
  private _orderService: OrderService;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private _bucketService: BucketService,
    private _authService: AuthService,
    private _courierService: CourierService

  ) {
    this.bucketService = _bucketService;
    this._orderService = orderService;
    this.itemsToDelete = [];
    this.authService = _authService;
  }

  async ngOnInit() {
    this._menus = this.bucketService._menus;
  }

  public itemClicked(id: Number){
    if(this.itemsToDelete.find(i => i === id)){
      const index = this.itemsToDelete.findIndex(d => d === id);
      this.itemsToDelete.splice(index, 1);
      return;
    }
    this.itemsToDelete.push(id);
    console.log(this.itemsToDelete);
  }
  public async sendOrder() {
    if (this.bucketService._menus.length <= 0)
      return;
    this._order = new Order();
    this._order.menus = [];
    this._menus.forEach(i => this._order.menus.push(i.menu));
    this._order.customer = this._authService.customer;
    this._order.courier = await this._courierService.getRandomCourier();
    this._order.dateOfOrder =  new Date();

    this.date = new Date();
    this._order.dateOfCompletion = new Date(this.date.setMinutes(this.date.getMinutes() + 30 ));
    this._order.cost = this.bucketService.getCostOfSelected();
    this._orderService.saveOrder(this._order);

    this._menus = [];
    this.bucketService._menus = [];

  }

  public removeItems(): void {
    this.itemsToDelete.forEach(i => {
      console.log('Removing with ID: ' + i);
      const index = this.bucketService._menus.findIndex(d => d.menu.id === i);
      if (i > -1) {
        this.bucketService._menus.splice(index, 1);
        this.itemsToDelete = [];
      }
    });
  }
}
