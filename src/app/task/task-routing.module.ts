import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { AboutUserInputComponent } from "./about-user-input/about-user-input.component";
import { RecipeComponent } from "./recipe/recipe.component";

import { TaskComponent } from "./task.component";
import { TemplateDrivenFromComponent } from "./template-driven-from/template-driven-from.component";
import { RegisterComponent } from "./user/register/register.component";
import { userDataDisplayResolverService } from "./user/user-data-display/user-data-display-resolver.service";
import { UserDataDisplayComponent } from "./user/user-data-display/user-data-display.component";
import { CanDeactivateGuardService } from "./user/user-edit/can-deactivate-guard.service";
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
    // resolve: { users: userDataDisplayResolverService },
    children: [
      {
        path: "userData",
        component: UserDataDisplayComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "edit/:id",
        component: UserEditComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  {
    path: "templateDrivenFrom",
    component: TemplateDrivenFromComponent,
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
