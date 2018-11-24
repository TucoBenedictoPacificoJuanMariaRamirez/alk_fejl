import { Injectable } from '@angular/core';
import {Menu} from '../classes/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menus: Menu[];
  constructor() {
    this.menus = [
      {
        id: 1,
        name: 'Csirkemell rizs',
        details: '500g, igazi csirkéből',
        price: 900,
        imgUrl: '../assets/img/food.png'
      } as Menu,
      {
        id: 2,
        name: 'Tökfőzelék',
        details: '',
        price: 650,
        imgUrl: '../assets/img/food.png'
      } as Menu,
      {
        id: 3,
        name: 'Vörösboros marhapörkölt, kagylótésztával',
        details: 'kenyér jár mellé',
        price: 1200,
        imgUrl: '../assets/img/food.png'
      } as Menu,
      {
        id: 4,
        name: 'Húslevel gazdagon, borsófőzelék',
        details: 'Laci bácsi kedvence',
        price: 950,
        imgUrl:'../assets/img/food.png'
      } as Menu
    ];
  }
  public getMenus(): Menu[] {
    return this.menus;
  }

  public getMenu(id: Number): Menu {
    return this.menus.find((menu: Menu) => menu.id === id);
  }
}
