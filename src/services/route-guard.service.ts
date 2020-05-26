import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HardCodedAuthenticationService} from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService,
              public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hardCodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login'])
    return false;
  }
}
