import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Users } from "../_helpers/interfaces/userDetails";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http
      .get(`${environment.localApiHost}/users`)
      .pipe(map((data: Users[]) => data));
  }

  getUser(uid): Observable<Users> {
    return this.http
      .get(`${environment.localApiHost}/users/${uid}`)
      .pipe(map((data: Users) => data));
  }

  createUser(user: Users): Observable<Users> {
    return this.http
      .post(`${environment.localApiHost}/users`, user)
      .pipe(map((data: Users) => data));
  }

  editUser(user: Users): Observable<Users> {
    return this.http
      .put(`${environment.localApiHost}/users/${user.id}`, user)
      .pipe(map((data: Users) => data));
  }

  deleteUser(user: Users): Observable<Users> {
    return this.http
      .delete(`${environment.localApiHost}/users`)
      .pipe(map((data: Users) => data));
  }
}
