import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Posts } from "../_helpers/interfaces/posts";
import { PostsService } from "../_services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Posts[];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (error) => {
        console.log(error);
        if (error.status === 404) {
          alert("Please check the API endpoint");
        }
      },
    });
  }

  switchMap = this.postService.getPosts().pipe(
    switchMap((posts: Posts[]) => {
      this.postService.getSinglePost(posts.i);
    })
  );

  trackByFn(index) {
    return index;
  }

  createPost() {
    const post: Posts = {
      id: 0,
      userId: 1,
      body: "Accenture",
      title: "Accenture",
    };
    this.postService.createPost(post);
  }
}
