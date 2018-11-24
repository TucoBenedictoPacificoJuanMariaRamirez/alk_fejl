import {Menu} from './menu';
import {Courier} from './courier';
import {Customer} from './customer';

export class Order {
    public id: Number;
    public menus: Menu[];
    public customer: Customer;
    public courier: Courier;
    public dateOfOrder: Date;
    public dateOfCompletion: Date;
    public cost: Number;
   // public quantity: Number;
}
