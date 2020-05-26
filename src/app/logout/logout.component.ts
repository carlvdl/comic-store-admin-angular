import { Component, OnInit } from '@angular/core';
import {HardCodedAuthenticationService} from '../../services/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService) {
    console.log('logout constructor');
  }

  ngOnInit() {
    console.log('logout ngOnint');
    this.hardCodedAuthenticationService.logout();

  }

}
