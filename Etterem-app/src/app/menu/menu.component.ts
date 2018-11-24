import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _menus: Menu[];
  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit() {
    this._menus = this._menuService.getMenus();
  }

}
