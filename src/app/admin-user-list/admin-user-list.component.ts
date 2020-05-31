import { Component, OnInit } from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';
import {AdminUser} from '../models/AdminUser';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

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


  // editAdminUser(userId: number): void {
  // editAdminUser(adminUser: AdminUser): void {
  //   console.log('Edit..');
  //   console.log(adminUser);
    // const adminUser  = this.adminUserService.findAdminUserById(userId);

    // xx TODO redirect to edit page
    // window.localStorage.removeItem("editUserId");
    // window.localStorage.setItem("editUserId", user.id.toString());
    // this.router.navigate(['edit-user']);
  // }

  delete(id: number) {
    console.log('deleting...');
    // this.adminUserService.deleteAdminUser(id).subscribe();
  }

  onPageChange(pageNumber: number) {
    console.log('pageNumber');
    console.log(pageNumber);
    this.getAdminUsers(pageNumber - 1);
  }
}
