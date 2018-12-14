import { Injectable } from '@angular/core';
import {Menu} from '../classes/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private route: string = 'menus';

  //private menus: Menu[];
  constructor(
    private httpService: HttpService
  ) { }
  public getMenus(): Promise<Menu[]> {
    //return this.menus;
    return this.httpService.get<Menu[]>(this.route);
    //return this.httpService.get<Menu[]>(this.route);
    
  }

  public getMenu(id: Number): Promise<Menu> {
    //return this.menus.find((menu: Menu) => menu.id === id);
    return this.httpService.get<Menu>(this.route + '/'+ id);
  }
}
