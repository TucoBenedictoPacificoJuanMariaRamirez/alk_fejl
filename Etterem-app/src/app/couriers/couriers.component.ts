import { Component, OnInit , Inject} from '@angular/core';
import {Courier} from '../classes/courier';
import {CourierService} from '../services/courier.service';


@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.css']
})
export class CouriersComponent implements OnInit {
  private _couriers: Courier[];
  private displayedColumns: string[] = ['id','name'];

  private couriersToDelete: Number[];

  constructor(

    private _courierService: CourierService

  ) { 
    this.couriersToDelete = [];
  }

  async ngOnInit() {
    this._couriers = await this._courierService.getCouriers();
  }

  
  public courierSelect(id:Number){
    
    if (this.couriersToDelete.find(i => i === id)) {
      const index = this.couriersToDelete.findIndex(d => d === id);
      this.couriersToDelete.splice(index, 1);
      return;
    }
      this.couriersToDelete.push(id);      
  }
  
  public addCourier(): void{
    var name = (document.getElementById("name") as HTMLInputElement).value;
    this._courierService.addCourier(name);

  }

  public deleteCourier(){
    this._courierService.deleteCourier(this.couriersToDelete);
    this.couriersToDelete = [];
  }


}
