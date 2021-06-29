import { Component, OnInit } from "@angular/core";
import { fromEvent, of, Subject } from "rxjs";
import {
  first,
  map,
  mergeMap,
  switchMap,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
} from "rxjs/operators";
import { Posts } from "../_helpers/interfaces/posts";
import { PostsService } from "../_services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  count: number = 0;
  startClick: Subject<void> = new Subject<void>();
  searchInput: any = "";

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

    this.postService
      .getPosts()
      .pipe(
        switchMap((posts) => {
          return this.postService.getSinglePost(1).pipe(
            tap((singlePost) => {
              console.log(singlePost);
            })
          );
        })
      )
      .subscribe((res) => console.log(res));

    this.postService
      .getPosts()
      .pipe(
        mergeMap((posts) => {
          return this.postService.getSinglePost(1).pipe(
            map((singlePost) => {
              const allposts = { posts, singlePost };
              return allposts;
            })
          );
        })
      )
      .subscribe((res) => console.log(res));

    const sourceClick = fromEvent(document, "click");
    sourceClick.pipe(first()).subscribe(() => {
      console.log("Document is clicked only once");
    });

    sourceClick.pipe(takeWhile(() => this.count < 3)).subscribe(() => {
      console.log("Document is allowed to click 3 times");
      this.count++;
    });

    const sourceTakeLast = of("Angular", "React", "VueJs");
    sourceTakeLast.pipe(takeLast(2)).subscribe((data) => console.log(data));

    sourceClick
      .pipe(takeUntil(this.startClick))
      .subscribe((res) => console.log(res));
  }

  stopClick() {
    this.startClick.next();
    this.startClick.complete();
  }

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
