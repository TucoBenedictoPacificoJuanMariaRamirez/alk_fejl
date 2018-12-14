import { Injectable } from '@angular/core';
import {Menu} from '../classes/menu';
import {MenuService} from './menu.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private route: string = "???";
  //public _selectedMenus: Menu[];
  //public countMenuType: Number[];
  //private menuService: MenuService;
  constructor(
      //private _menuService: MenuService
      private httpService: HttpService
  ) {
    //this.menuService = _menuService;
   // this._selectedMenus = [];
   // this.countMenuType = [0, 0, 0, 0, 0];
  }
  /*
  public getCostOfSelected(): Number {
    let sum = 0;
    for (let i = 0; i < this._selectedMenus.length; ++i) {
      sum += +this._selectedMenus[i].price * +this.countMenuType[i + 1];
    }
    return sum;
  }
  */
   public getMenus(): Promise<Menu[]> {
    return this.httpService.get<Menu[]>(this.route);
  }
}
