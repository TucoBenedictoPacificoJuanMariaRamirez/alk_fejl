import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';
import {BucketService} from '../services/bucket.service';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {CustomerService} from '../services/customer.service';
import {CourierService} from '../services/courier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  private _order: Order;
  //private _menus: Menu[];
  //private itemsToDelete: Number[];
  //private bucketService: BucketService;
  //private orderService: OrderService;
  //private customerService: CustomerService;
  //private courierService: CourierService;

  constructor(
    private route: ActivatedRoute,
    private _orderService: OrderService,
    private _bucketService: BucketService
    //private _menuService: MenuService, private _bucketService: BucketService, private _orderService: OrderService,
    //private _customerService: CustomerService, private _courierService: CourierService
  ) {
    //this.bucketService = _bucketService;
    //this.orderService = _orderService;
    //this.customerService = _customerService;
    //this.courierService = _courierService;
    //this.itemsToDelete = [];
  }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._order = await this._orderService.getOrder(id);
    //this._menus = this.bucketService._selectedMenus;
    //this._menus = await this._bucketService.getMenus();
  }
  /*
  public removeItems(): void {
    console.log('forEach start');
    this.itemsToDelete.forEach(i => {
      console.log('Removing with ID: ' + i);
      const index = this.bucketService._selectedMenus.findIndex(d => d.id === i);
      if (i > -1) {
        this.bucketService._selectedMenus.splice(index, 1);
        this.itemsToDelete = [];
        this.bucketService.countMenuType[i.toString()] = 0;
      }
    });
  }

  public itemClicked(id: Number): void {
    console.log(id);
    if (this.itemsToDelete.find(i => i === id)) {
      const index = this.itemsToDelete.findIndex(d => d === id);
      this.itemsToDelete.splice(index, 1);
      return;
    }
      this.itemsToDelete.push(id);
  }

  public deleteAll(): void {
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
  }
  */
}
