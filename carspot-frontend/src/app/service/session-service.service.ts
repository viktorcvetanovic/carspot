import {Injectable} from '@angular/core';
import {User} from "./data/User";

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  private user = null;

  constructor() {
  }


  public isLoggedIn() {
    return this.user != null;
  }

  registerUser(user: any) {
    this.user = user;
  }

  removeUser() {
    this.user = null;
  }

  getUserFromSession() : any {
    return this.user;
  }
}
