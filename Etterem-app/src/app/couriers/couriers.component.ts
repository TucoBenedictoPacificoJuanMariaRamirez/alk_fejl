import { Component, OnInit } from '@angular/core';
import {Courier} from '../classes/courier';
import {CourierService} from '../services/courier.service';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
    private _courierService: CourierService,
    //public dialog: MatDialog
  ) { 
    this.couriersToDelete = [];
  }

  async ngOnInit() {
    this._couriers = await this._courierService.getCouriers();
  }

  
  public courierSelect(id:Number){
    /*
    if (this.couriersToDelete.find(i => i === id)) {
      const index = this.couriersToDelete.findIndex(d => d === id);
      this.couriersToDelete.splice(index, 1);
      return;
    }
      this.couriersToDelete.push(id);
      console.log(this.couriersToDelete);
      */
  }
  public addCourier(){
    /*
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  */
  }

  public deleteCourier(){
    //this._courierService.deleteCourier(this.couriersToDelete);
  }


}
