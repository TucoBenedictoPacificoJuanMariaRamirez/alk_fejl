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
        name: 'Csrikemell rizs',
        details: '500g, igazi csirkéből',
        price: 900
      } as Menu,
      {
        id: 2,
        name: 'Tökfőzelék',
        details: '',
        price: 650
      } as Menu,
      {
        id: 3,
        name: 'Vörösboros marhapörkölt, kagylótésztával',
        details: 'kenyér jár mellé',
        price: 1200
      } as Menu,
      {
        id: 4,
        name: 'Húslevel gazdagon, borsófőzelék',
        details: 'Laci bácsi kedvence',
        price: 950
      } as Menu
    ];
  }

  public getMenus(id: Number): Menu {
    return this.menus.find((menu: Menu) => menu.id === id);
  }
}
