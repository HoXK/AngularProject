import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Users } from "../_helpers/interfaces/userDetails";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http
      .get(`${environment.localApiHost}/user`)
      .pipe(map((data: Users[]) => data));
  }

  getUser(uid): Observable<Users> {
    return this.http
      .get(`${environment.localApiHost}/user/${uid}`)
      .pipe(map((data: Users) => data));
  }

  createUser(user: Users): Observable<Users> {
    return this.http
      .post(`${environment.localApiHost}/createUser`, user)
      .pipe(map((data: Users) => data));
  }

  editUser(user: Users): Observable<Users> {
    return this.http
      .put(`${environment.localApiHost}/updateUser`, user)
      .pipe(map((data: Users) => data));
  }

  deleteUser(userId: number): Observable<Users> {
    return this.http
      .delete(`${environment.localApiHost}/deleteUser/${userId}`)
      .pipe(map((data: Users) => data));
  }
}
