import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';

import { MenuService} from '../services/menu.service';
import {BucketService} from '../services/bucket.service';
import {AuthService} from '../services/auth.service';
import {MenuCount} from '../classes/menu-count';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _menus: Menu[];
  // private menuToBucket: Menu;
  private countMenuType: Number[];

  private menuService;
  private bucketService;
  private authService: AuthService;

  constructor(
    private _menuService: MenuService,
    private _authService: AuthService,
     private _bucketService: BucketService
  ) {
    this.menuService = _menuService;
    this.bucketService = _bucketService;
    this.authService = _authService;
    this.countMenuType = [0,0,0,0,0];
  }

  async ngOnInit() {
    this._menus = await this._menuService.getMenus();
    //this._menus = this._menuService.getMenus();
  }

  public async addToBucket(id: Number) {
    /*this.menuToBucket = await this._menuService.getMenu(id);
    this.bucketService._menus.push(this.menuToBucket);*/

    let currMenuCount = this.bucketService._menus.find(x => x.menu.id === id)
    if (!currMenuCount) {
      this.bucketService._menus.push({menu: await this._menuService.getMenu(id), count: 1} as MenuCount);
    }
    else {
      currMenuCount.count++;
      console.log('Adding menu with ID: ' + id);
    }
    console.log(this.bucketService._menus);
  }
}
