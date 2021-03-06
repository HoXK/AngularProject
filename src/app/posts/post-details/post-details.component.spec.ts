import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { SearchFilterPipe } from "../search-filter.pipe";

import { PostDetailsComponent } from "./post-details.component";
import { Posts } from "src/app/_helpers/interfaces/posts";

describe("PostDetailsComponent", () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostDetailsComponent, SearchFilterPipe],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: "1" }),
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    let post: Posts;

    post.id = 1;
    post.title = "title";
    post.body = "body";

    expect(component).toBeTruthy();
  });
});
