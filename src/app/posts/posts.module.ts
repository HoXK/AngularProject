import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { FormsModule } from "@angular/forms";
import { SearchFilterPipe } from "./search-filter.pipe";

@NgModule({
  declarations: [PostsComponent, PostDetailsComponent, SearchFilterPipe],
  imports: [CommonModule, PostsRoutingModule, FormsModule],
})
export class PostsModule {}
