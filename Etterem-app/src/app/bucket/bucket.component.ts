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
  private selectedOptions: Menu[];
  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit() {
    this._menus = this._menuService.getMenus();
    this.selectedOptions = [];
  }

  public removeItems(event: Event): void {
    console.log('belemegy');
    const currentBucket = this;
    this.selectedOptions.forEach(function(value) {
      const index = currentBucket.selectedOptions.indexOf(value, 0);
      if (index > -1) {
        currentBucket.selectedOptions.splice(index, 1);
      }
      console.log(value + 'deleted');
    });
  }

  public updateSelected(event: Event, menu: Menu): void {
    this.selectedOptions.push(menu);
  }

}
