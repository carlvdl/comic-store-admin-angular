import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteGuardService} from '../services/route-guard.service';
import {LogoutComponent} from './logout/logout.component';
import {AdminUserListComponent} from './admin-user-list/admin-user-list.component';
import {AdminUserEditComponent} from './admin-user-edit/admin-user-edit.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardService]},

  {path: 'adminUsers', component: AdminUserListComponent, canActivate: [RouteGuardService]},
  // {path: 'adminUser', component: AdminUserListComponent, canActivate: [RouteGuardService]},
  {path: 'adminUser/:id', component: AdminUserEditComponent, canActivate: [RouteGuardService]},
  {path: 'adminUser', component: AdminUserEditComponent, canActivate: [RouteGuardService]},

  {path: 'roles', component: HomeComponent, canActivate: [RouteGuardService]},

  {path: 'customers', component: HomeComponent, canActivate: [RouteGuardService]},

  {path: 'orders', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'publishers', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'gradings', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'titles', component: HomeComponent, canActivate: [RouteGuardService]},

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},

  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]}
  // {path: 'logout', component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
