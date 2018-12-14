import { Injectable } from '@angular/core';
import {Courier} from '../classes/courier';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  private route: String = "couriers";
  //private couriers: Courier[];

  constructor(
    private httpService: HttpService
  ) { }
  
  public getCouriers(): Promise<Courier[]> {
    return this.httpService.get<Courier[]>(this.route);
  }

  public getCourier(id: Number): Promise<Courier> {
    return this.httpService.get<Courier>(this.route + '/' + id );
  }
/*
  public  deleteCourier(id: Number[]): Promise<Courier[]>{
    return this.httpService.delete<Courier[]>(this.route);//???
  }
*/
/*
  public getRandomCourier(): Courier {
    return this.couriers[Math.floor(Math.random() * this.couriers.length)];
  }
*/
}
