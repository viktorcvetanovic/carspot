import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  private token: string = "";

  constructor() {
  }


  public isLoggedIn() {
    return false;
  }
}
