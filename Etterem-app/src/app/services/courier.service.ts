import { Injectable } from '@angular/core';
import {Courier} from '../classes/courier';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  private route: String = "couriers";
  //private couriers: Courier[];
  private c: Courier;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }
  
  public getCouriers(): Promise<Courier[]> {
    return this.httpService.get<Courier[]>(this.route);
  }

  public getCourier(id: Number): Promise<Courier> {
    return this.httpService.get<Courier>(this.route + '/' + id );
  }

  public async deleteCourier(id: Number[]){
    for(var i = 0; i < id.length;i++){
      try{
        await this.httpService.delete<Courier>(this.route + "/" + id[i]);
        this.router.navigate(['']);
        //ne a menu-re navigaljon, hanem vissza a futarokra,azt frissitse le
      }catch(e){}
    }
  }

  public async addCourier(name: String){
    this.c = new Courier();
    this.c.name = name;
    try{
      await this.httpService.post<Courier>(this.route,this.c),
      this.router.navigate(['']);
      //ne a menu-re navigaljon, hanem vissza a futarokra,azt frissitse le
    }catch(e){}
    
  }

/*
  public getRandomCourier(): Courier {
    return this.couriers[Math.floor(Math.random() * this.couriers.length)];
  }
*/
}
