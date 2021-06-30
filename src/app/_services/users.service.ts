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
    return this.http.get<Users[]>(`${environment.localApiHost}/user`);
  }

  getUser(uid): Observable<Users> {
    return this.http.get<Users>(`${environment.localApiHost}/user/${uid}`);
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(
      `${environment.localApiHost}/createUser`,
      user
    );
  }

  editUser(user: Users): Observable<Users> {
    return this.http.put<Users>(`${environment.localApiHost}/updateUser`, user);
  }

  deleteUser(userId: number): Observable<Users> {
    return this.http.delete<Users>(
      `${environment.localApiHost}/deleteUser/${userId}`
    );
  }
}
