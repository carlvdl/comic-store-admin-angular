import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardCodedAuthenticationService} from '../../services/hard-coded-authentication.service';
import {BasicAuthenticationService} from '../../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user';
  password = 'user';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private hardCodedAuthenticationService: HardCodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService
              ) { }

  ngOnInit() {
  }


  handleBasicAuthLogin() {
    console.log('handleBasicAuthLogin---');
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log('handleBasicAuthLogin, routing?');
          this.router.navigate(['home']);
          this.invalidLogin = false;
          console.log('routed');

        });
  }
  handleLogin() {
    console.log('\nusername: ' + this.username);
    console.log('\npassword: ' + this.password);
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['home']);
      this.invalidLogin = false;

    } else {
      this.invalidLogin = true;
    }
    console.log('this.invalidLogin--> ' + this.invalidLogin);
  }
}
