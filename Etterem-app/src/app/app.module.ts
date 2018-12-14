import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BucketComponent } from './bucket/bucket.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, MatTableDataSource, MatTableModule,
  MatToolbarModule,

  MatExpansionModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';


import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { CouriersComponent } from './couriers/couriers.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    BucketComponent,
    OrderComponent,
    ContactComponent,
    NavbarComponent,
    OrdersComponent,
    ProfileComponent,
    CouriersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,

    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
