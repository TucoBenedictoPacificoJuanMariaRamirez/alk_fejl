import { Component, OnInit } from '@angular/core';
import { Menu } from '../classes/menu';
import { MenuService } from '../services/menu.service';
import {BucketService} from '../services/bucket.service';
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  private _menus: Menu[];
  private itemsToDelete: Number[];
  private bucketService: BucketService;

  constructor(
    private _menuService: MenuService, private _bucketService: BucketService
  ) {
    this.bucketService = _bucketService;
    this.itemsToDelete = [];
  }

  ngOnInit() {
    this._menus = this.bucketService._selectedMenus;
  }

  public removeItems(): void {
    console.log('forEach start');
    this.itemsToDelete.forEach(i => {
      console.log('Removing with ID: ' + i);
      const index = this.bucketService._selectedMenus.findIndex(d => d.id === i);
      if (i > -1) {
        this.bucketService._selectedMenus.splice(index, 1);
        this.itemsToDelete = [];
        this.bucketService.countMenuType[i.toString()] = 0;
      }
    });
  }

  public itemClicked(id: Number): void {
    console.log(id);
    if (this.itemsToDelete.find(i => i === id)) {
      const index = this.itemsToDelete.findIndex(d => d === id);
      this.itemsToDelete.splice(index, 1);
      return;
    }
      this.itemsToDelete.push(id);
  }

  public deleteAll(): void {
    this.bucketService.countMenuType = [0, 0, 0, 0, 0];
    this.bucketService._selectedMenus = [];
  }

}
