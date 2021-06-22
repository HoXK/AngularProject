import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserComponent } from "./user/user.component";
import { UserDataDisplayComponent } from "./user/user-data-display/user-data-display.component";
import { RegisterComponent } from "./user/register/register.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { AboutUserInputComponent } from "./about-user-input/about-user-input.component";
import { TasksRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModuleModule } from "../_directives/shared-module.module";
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    TaskComponent,
    UserComponent,
    UserDataDisplayComponent,
    RegisterComponent,
    RecipeComponent,
    AboutUserInputComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
  ],
})
export class TaskModule {}
