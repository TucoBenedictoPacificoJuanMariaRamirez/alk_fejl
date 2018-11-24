import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {BucketComponent} from './bucket/bucket.component';
import {OrdersComponent} from './orders/orders.component';
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'bucket', component: BucketComponent},
    {path: 'orders', component: OrdersComponent},
    {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
