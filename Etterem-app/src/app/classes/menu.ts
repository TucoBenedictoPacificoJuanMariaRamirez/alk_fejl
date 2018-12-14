import {Order} from "./order";

export class Menu {
    public id: Number;
    public name: String;
    public details: String;
    public price: Number;
    public imgUrl: String;
    public orders: Order[];
}
