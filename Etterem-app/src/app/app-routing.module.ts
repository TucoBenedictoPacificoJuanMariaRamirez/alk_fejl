import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {BucketComponent} from './bucket/bucket.component';
import {OrdersComponent} from './orders/orders.component';
import {ContactComponent} from "./contact/contact.component";

import {CouriersComponent} from "./couriers/couriers.component";
import {OrderComponent} from './order/order.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'bucket', component: BucketComponent},
    {path: 'orders', component: OrdersComponent},
    {path: "contact", component: ContactComponent},
    {path: "orders", component: OrdersComponent},

    {path: "couriers", component: CouriersComponent},
    {path: "order", component: OrderComponent},
    {path: "profile", component: ProfileComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
