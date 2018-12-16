import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';

import { MenuService} from '../services/menu.service';
import {BucketService} from '../services/bucket.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _menus: Menu[];
  private menuToBucket: Menu;

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
  }

  async ngOnInit() {
    this._menus = await this._menuService.getMenus();
    //this._menus = this._menuService.getMenus();
  }

  public async addToBucket(id: Number) {
    this.menuToBucket = await this._menuService.getMenu(id);
    this.bucketService._menus.push(this.menuToBucket);
    /*
    if (!this.bucketService._selectedMenus.find(x => x.id === id)) {
      this.bucketService._selectedMenus.push(this.menuService.getMenu(id));
    }

    this.bucketService.countMenuType[id.toString()]++;
    console.log('Adding menu with ID: ' + id);
    */
  }
  
}
