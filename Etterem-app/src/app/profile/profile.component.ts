import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../services/customer.service'; 
import { Customer } from '../classes/customer';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _customer: Customer;
  private _newCustomer: Customer;
  private authService: AuthService;
  private message: String;

  constructor(
    private route: ActivatedRoute,
    private _customerService: CustomerService,
    private _authService: AuthService
  ) {
    this.authService = _authService;
   }


  async ngOnInit() {
    //const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    var id = this._authService.customer.id;
    this._customer = await this._customerService.getCustomer(id);//id-->ki van bejelentkezve
  }

  public modifyCustomer(){
    var name = (document.getElementById("name") as HTMLInputElement).value; ;
    var email = (document.getElementById("email") as HTMLInputElement).value;
    var address = (document.getElementById("address") as HTMLInputElement).value;
    var phone = (document.getElementById("phone") as HTMLInputElement).value;

    this._newCustomer = this._customer;

    if(name != ""){this._newCustomer.fullname = name;}
    if(email != ""){this._newCustomer.email = email;}
    if(address != ""){this._newCustomer.address = address;}
    if(phone != ""){this._newCustomer.phone = phone;}

    
    try {
      this._customerService.modifyCustomer(this._newCustomer);
      this.message = 'Sikeres módosítás!';
    }
    catch(e) {
      this.message = 'Sikertelen módosítás!';
    }
  }

}
