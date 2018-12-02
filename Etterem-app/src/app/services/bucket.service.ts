import { Injectable } from '@angular/core';
import {Menu} from '../classes/menu';
import {MenuService} from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  public _selectedMenus: Menu[];
  public countMenuType: Number[];
  private menuService: MenuService;
  constructor(
      private _menuService: MenuService
  ) {
    this.menuService = _menuService;
    this._selectedMenus = [];
    this.countMenuType = [0, 0, 0, 0, 0];
  }

  public getCostOfSelected(): Number {
    let sum = 0;
    for (let i = 0; i < this._selectedMenus.length; ++i) {
      sum += +this._selectedMenus[i].price * +this.countMenuType[i + 1];
    }
    return sum;
  }
}
