import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CareersComponent } from "./careers/careers.component";
import { ContactDataDisplayComponent } from "./contact-data-display/contact-data-display.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { IndustriesComponent } from "./industries/industries.component";
import { InsightsComponent } from "./insights/insights.component";
import { ListOfRegisteredUsersComponent } from "./list-of-registered-users/list-of-registered-users.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RxjsOperatorsComponent } from "./rxjs-operators/rxjs-operators.component";
import { Login } from "./_guards/login.service";
import { UnsavedChangesGuard } from "./_guards/un-saved-changes-guard.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "insights",
    component: InsightsComponent,
  },
  {
    path: "services",
    loadChildren: () =>
      import("./services/services.module").then((m) => m.ServicesModule),
  },
  {
    path: "careers",
    component: CareersComponent,
  },
  {
    path: "industries",
    component: IndustriesComponent,
    canActivate: [Login],
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
  {
    path: "signup",
    component: ListOfRegisteredUsersComponent,
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },
  {
    path: "contactDataDisplay",
    component: ContactDataDisplayComponent,
  },
  {
    path: "rxjs",
    component: RxjsOperatorsComponent,
  },
  {
    path: "angular-material",
    loadChildren: () =>
      import("./_material/_material.module").then((x) => x.MaterialModule),
  },
  {
    path: "custom-pipe",
    loadChildren: () =>
      import("./_custom-pipe/_custom-pipe.module").then(
        (x) => x.CustomPipeModule
      ),
  },
  {
    path: "task",
    loadChildren: () => import("./task/task.module").then((m) => m.TaskModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
