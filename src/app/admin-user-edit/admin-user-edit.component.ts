import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminUser} from '../models/AdminUser';
import {AdminUserService} from '../../services/admin-user.service';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  adminUser: AdminUser;
  percentDone: number;
  uploadSuccess: boolean;
  fileToUpload: File = null;
  adminUsersListUrl: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private adminUserService: AdminUserService
  ) { }

  ngOnInit() {

    this.adminUsersListUrl = 'adminUsers';

    console.log('AdminUserEditComponent: ');
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('the id passed in is: ' + id);
    if (id > 0) {
      console.log('Proceed to edit admin user...');
      this.getAdminUserById(id);

    } else {
      console.log('Proceed to add admin user...');
      this.adminUser = new AdminUser();
    }
  }

  private getAdminUserById(id: number) {
    this.adminUserService.getAdminUserById(id).subscribe(
      adminUserObj => {
        console.log('getting admin user');
        console.log(adminUserObj);
        this.adminUser = adminUserObj;
      }
    );
  }

  saveAdminUser() {
    const adminUserId = this.adminUser.adminUserId;
    console.log('adminUserId--> ' + adminUserId);
    if (adminUserId) {
      console.log('updating admin user..');

      // 1 update admin user
      console.log('part 1 update admin user...');
      this.adminUserService.updateAdminUser (this.adminUser)
        .subscribe(() => {
          console.log('Updating...');
          this.router.navigate([this.adminUsersListUrl]);
        });

      //  2 update image for admin user
      console.log('part 2 update image for admin user...');
      const result = this.adminUserService.updateAdminUserImage(this.fileToUpload, adminUserId);
      console.log('The result is: ' + result);

    } else {
      console.log('saving new..');
      const formData = new FormData();
      // this.fileToUpload = files.item(0);
    }
  }

  // https://stackblitz.com/edit/angular-file-upload?file=app%2Fapp.component.ts
  upload(files: FileList) {
    console.log('upload file...');
    this.fileToUpload = files.item(0);
    // this.uploadAndProgress(files);
  }

 
}
