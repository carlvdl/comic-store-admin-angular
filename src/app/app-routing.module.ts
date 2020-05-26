import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteGuardService} from '../services/route-guard.service';
import {LogoutComponent} from './logout/logout.component';
import {AdminUserComponent} from './admin-user/admin-user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardService]},

  {path: 'adminUsers', component: AdminUserComponent, canActivate: [RouteGuardService]},
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
