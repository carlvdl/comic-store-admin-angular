import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('isUserLoggedIn start:' + this.isUserLoggedIn());
    if (username === 'user' && password === 'user') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('isUserLoggedIn after logging in:' + this.isUserLoggedIn());
      return true;

    }
    return false;


  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    // console.log('checking if user is loged in');
    // console.log(user);
    return !(user === null);
  }


  logout() {
    console.log('logout..');
    sessionStorage.removeItem('authenticatedUser');
  }


}
