import { Component, OnInit } from '@angular/core';
import {HardCodedAuthenticationService} from '../../services/hard-coded-authentication.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';



//https://loiane.com/2017/08/angular-hide-navbar-login-page/
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn = false;
  showNavBar: boolean;

  constructor(protected hardCodedAuthenticationService: HardCodedAuthenticationService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
    console.log('-------');
    console.log(this.router.url);
    console.log(this.location);
    const path  = this.location.path();

    if (path === '/login') {
      this.showNavBar = false;
    } else {
      this.showNavBar = true;

    }
    console.log(path);
  }

}


