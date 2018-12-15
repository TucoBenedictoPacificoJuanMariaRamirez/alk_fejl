import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../services/customer.service'; 
import { Customer } from '../classes/customer';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _customer: Customer;
  
  constructor(
    private route: ActivatedRoute,
    private _customerService: CustomerService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    //this._customer = await this._customerService.getCustomer(id);//id-->ki van bejelentkezve
  }
  public modifyCustomer(){
    
  }

}
