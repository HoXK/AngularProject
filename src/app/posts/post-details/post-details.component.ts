import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Posts } from "src/app/_helpers/interfaces/posts";
import { PostsService } from "src/app/_services/posts.service";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"],
})
export class PostDetailsComponent implements OnInit {
  singlePost: Posts;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.postService
      .getSinglePost(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.singlePost = data;
      });
  }

  DeletePost() {
    this.postService.deletePosts(this.singlePost);
    alert(`${this.singlePost.id} is deleted`);
  }
}
