import { Injectable } from '@angular/core';
import {Courier} from '../classes/courier';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private couriers: Courier[];

  constructor() {
    this.couriers = [
        {
          id: 1,
          name: 'Tamás',
        } as Courier,
        {
          id: 2,
          name: 'Béla'
        } as Courier,
        {
          id: 3,
          name: 'Vendel'
        } as Courier
    ];
  }

  public getCouriers(): Courier[] {
    return this.couriers;
  }
}
