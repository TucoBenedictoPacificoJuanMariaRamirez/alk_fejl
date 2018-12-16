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
    var cost: Number  = 0;
    for(var i = 0; i < this._menus.length ;i++) {
      cost = cost = this._order.menus[i].price;
    }
    this._order.cost = this.bucketService.getCostOfSelected();

    console.log(this._order);
    this._orderService.saveOrder(this._order);

    this._menus = [];
    this.bucketService._menus = [];

  }
    /*
    this.itemsToDelete.forEach(i => {
      console.log('Removing with ID: ' + i);
      const index = this._menus.findIndex(d => d.id === i);
      if (i > -1) {
        this.bucketService._menus.splice(index, 1);
        this.itemsToDelete = [];
        //this.bucketService.countMenuType[i.toString()] = 0;
      }
    });
    */
/*
    for(var i = 0;i < this._menus.length;i++){
      for(var j = 0; j< this.itemsToDelete.length;j++){
        if(this.itemsToDelete[j] == this._bucketService._menus[i].id){
          this._menus.splice(i,1);
        }
      }
    }
    console.log(this._menus);
    this.itemsToDelete = [];
    *=
  }*/


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

  /*public deleteAll(): void {
    // If there is something in the bucket, a new Order is created
    if (this.bucketService._selectedMenus) {
      this.orderService.saveOrder({
        id: 100,
        menus: [],
        customer: this.customerService.getCustomers()[0],
        courier: this.courierService.getRandomCourier(),
        dateOfOrder: new Date(),
        dateOfCompletion: null,
        cost: this.bucketService.getCostOfSelected()
      } as Order);
    }
    // Delete bucket items
    this.bucketService.countMenuType = [0, 0, 0, 0, 0];
    this.bucketService._selectedMenus = [];
  }*/
}
