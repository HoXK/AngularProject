import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginUser } from "../_helpers/interfaces/LoginUser";

@Injectable({ providedIn: "root" })
export class Login implements CanActivate {
  currentUser: LoginUser;

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (
      this.currentUser &&
      this.currentUser.token &&
      this.currentUser.token !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
}
