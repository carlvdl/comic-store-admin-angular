import { Component, OnInit } from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';
import {AdminUser} from '../models/AdminUser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  // users$: Observable<User[]>;
  //   total$: Observable<number>;

  // protected adminUsers$: Observable<AdminUser[]>;
  // protected total$: Observable<number>;
  protected pageNumber = 0;
  protected pageSize = 5;

  protected adminUsers = null;
  protected total = null;


  constructor(
    private adminUserService: AdminUserService
  ) {
    // this.getAdminUsers(0);

  }

  ngOnInit() {
    console.log('--------');
    console.log('--------');
    console.log('--------');
    this.getAdminUsers(0);
    console.log('--------');
    console.log('--------');
    console.log('--------');
  }


  getAdminUsers(pageNumber: number): void {
    console.log(('getting admin users....'));
    this.adminUserService.findUsers('', '', this.pageNumber, this.pageSize ).subscribe(
      response => {

        console.log(response);
        console.log('getting admin users for page ');
        console.log(this.pageNumber);

        this.adminUsers = response.body;
        console.log('-----------------1-------------');
        const temp = response.headers.get('x-total-count');
        console.log(temp);
        console.log('-------2------');

        // this.adminUsers$ = this.adminUserService.adminUsers$;
        // this.total$ = this.adminUserService.total$;

        console.log('start data: ');
        // console.log(this.adminUsers$ );
        // console.log(this.total$);
        console.log('end data: ');
        // this.adminUsers = response;
      }
    );
  }


  onPageChange(pageNumber: number) {
    console.log('pageNumber');
    console.log(pageNumber);
    // this.getAdminUsers(pageNumber - 1);
  }
}
