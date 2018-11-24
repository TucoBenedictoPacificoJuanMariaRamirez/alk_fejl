import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  private _menus: Menu[];
  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit() {
    this._menus = this._menuService.getMenus();
  }

}