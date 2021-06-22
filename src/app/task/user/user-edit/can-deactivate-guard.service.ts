import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Users } from "src/app/_helpers/interfaces/userDetails";

@Injectable({
  providedIn: "root",
})
export class CanDeactivateGuardService implements CanDeactivate<Users> {
  canDeactivate(
    component: Users,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
  constructor() {}
}
