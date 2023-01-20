import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from 'rxjs';
import {SessionServiceService} from "./session-service.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityGuardService implements CanActivate {

  private session: SessionServiceService;

  constructor(session: SessionServiceService) {
    this.session = session;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isLoggedIn();
  }
}
