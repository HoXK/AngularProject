import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoginUser } from "../_helpers/interfaces/LoginUser";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LoginUser>;
  public currentUser: Observable<LoginUser>;

  constructor(private http: HttpClient, private route: Router) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(
      JSON.parse(sessionStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<LoginUser>(`${environment.localApiHost}/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    this.route.navigate(["../login"]);
  }
}
