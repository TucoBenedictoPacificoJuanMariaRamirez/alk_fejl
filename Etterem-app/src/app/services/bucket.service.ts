import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Menu} from '../classes/menu';
import {MenuService} from './menu.service';
import { HttpService } from './http.service';
import {MenuCount} from '../classes/menu-count';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  // private route: string = "???";
  public _menus: MenuCount[] = [];
  private menuService: MenuService;
  constructor(
      private _menuService: MenuService,
      private httpService: HttpService
  ) {
    this.menuService = _menuService;
  }

  public getCostOfSelected(): Number {
    let sum = 0;
    for (let i = 0; i < this._menus.length; ++i) {
      sum += +this._menus[i].menu.price * +this._menus[i].count;
    }
    return sum;
  }

   /*public getMenus(): Promise<Menu[]> {
    return this.httpService.get<Menu[]>(this.route);
  }*/

}
