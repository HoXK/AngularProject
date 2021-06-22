import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Posts } from "../_helpers/interfaces/posts";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http
      .get(`${environment.apiHost}/posts`)
      .pipe(map((data: Posts[]) => data));
  }

  getSinglePost(pid): Observable<Posts> {
    return this.http
      .get(`${environment.apiHost}/posts/${pid}`)
      .pipe(map((data: Posts) => data));
  }

  createPost(post: Posts): Observable<Posts> {
    return this.http
      .post(`${environment.apiHost}/posts`, JSON.stringify(post))
      .pipe(map((data: Posts) => data));
  }

  updatePosts(post: Posts): Observable<Posts> {
    return this.http
      .put(`${environment.apiHost}/posts/${post.id}`, JSON.stringify(post))
      .pipe(map((data: Posts) => data));
  }

  deletePosts(post: Posts): Observable<any> {
    return this.http.delete(`${environment.apiHost}/posts/${post.id}`);
  }
}
