import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKEN} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = 'user';
    const password = 'user';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const jwtAuthHeaderString =  sessionStorage.getItem(TOKEN);
    console.log('jwtAuthHeaderString--> ' + jwtAuthHeaderString);

    req = req.clone({
      setHeaders: {
        Authorization: jwtAuthHeaderString
      }
    });

    return next.handle(req);
  }
}
