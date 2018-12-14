import {Order} from "./order";

export class Customer {
    public id: Number;
    public email: String;
    public password: String;
    public fullname: String;
    public address: String;
    public phone: String;
    public role: Roles;
    public orders: Order[];
}

export enum Roles {
    ROLE_ADMIN, ROLE_GUEST, ROLE_CUSTOMER
}
