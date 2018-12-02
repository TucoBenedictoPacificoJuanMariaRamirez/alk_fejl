import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService} from '../services/menu.service';
import {BucketService} from '../services/bucket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _menus: Menu[];

  private menuService;
  private bucketService;
  constructor(
    private _menuService: MenuService, private _bucketService: BucketService
  ) {
    this.menuService = _menuService;
    this.bucketService = _bucketService;
  }

  ngOnInit() {
    this._menus = this._menuService.getMenus();
  }

  public addToBucket(id: Number): void {
    if (!this.bucketService._selectedMenus.find(x => x.id === id)) {
      this.bucketService._selectedMenus.push(this.menuService.getMenu(id));
    }

    this.bucketService.countMenuType[id.toString()]++;
    console.log('Adding menu with ID: ' + id);
  }
}
