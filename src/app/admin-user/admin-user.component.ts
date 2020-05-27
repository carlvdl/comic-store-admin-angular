import { Component, OnInit } from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  // protected adminUsers$: Observable<AdminUser[]>;
  // protected total$: Observable<number>;
  protected pageNumber = 0;
  protected pageSize = 5;

  protected adminUsers = null;
  protected total = null;


  constructor(
    private adminUserService: AdminUserService
  ) { }

  ngOnInit() {
    this.getAdminUsers(0);
  }


  getAdminUsers(currentPageNumber: number): void {
    console.log('getting admin users....' + currentPageNumber);

    // const limit = this.pageSize;
    const limit = this.pageSize;
    const offset = currentPageNumber * this.pageSize;

    this.adminUserService.findUsers('', '', limit , offset).subscribe(
      response => {

        console.log(response);
        this.adminUsers = response.body;
        this.total = parseInt(response.headers.get('x-total-count'), 10);

        console.log('start data: ');
        console.log(this.adminUsers );
        console.log(this.total);
        console.log('end data: ');

      }
    );
  }


  onPageChange(pageNumber: number) {
    console.log('pageNumber');
    console.log(pageNumber);
    this.getAdminUsers(pageNumber - 1);
  }
}
