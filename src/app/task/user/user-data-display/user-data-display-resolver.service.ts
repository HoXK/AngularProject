import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Injectable({
  providedIn: "root",
})
export class userDataDisplayResolverService implements Resolve<Users[]> {
  constructor(private userService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Users[]> | Promise<Users[]> | Users[] {
    return this.userService.getAllUsers();
  }
}
