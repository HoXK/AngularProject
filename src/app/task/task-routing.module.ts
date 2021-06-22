import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUserInputComponent } from "./about-user-input/about-user-input.component";
import { RecipeComponent } from "./recipe/recipe.component";

import { TaskComponent } from "./task.component";
import { RegisterComponent } from "./user/register/register.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {
    path: "task",
    component: TaskComponent,
  },
  {
    path: "aboutUserInput",
    component: AboutUserInputComponent,
  },
  {
    path: "recipe",
    component: RecipeComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "userEdit",
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
