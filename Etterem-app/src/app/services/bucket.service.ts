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
}
