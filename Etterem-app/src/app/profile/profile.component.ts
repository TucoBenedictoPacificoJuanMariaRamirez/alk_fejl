import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../services/customer.service'; 
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _customer: Customer;
  
  constructor(
    private _customerService: CustomerService
  ) { }

  async ngOnInit() {
    //this._customer = await this._customerService.getCustomer(id);//id-->ki van bejelentkezve
  }
  public modifyCustomer(){
    
  }

}
