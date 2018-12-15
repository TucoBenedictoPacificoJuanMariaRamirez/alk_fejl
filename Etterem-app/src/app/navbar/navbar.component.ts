import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private authService: AuthService;
  constructor(private _authService: AuthService) {
    this.authService = _authService;
  }

  ngOnInit() {
  }

}
