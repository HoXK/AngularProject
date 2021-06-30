import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularConceptsComponent } from "./angular-concepts/angular-concepts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "angular-concepts",
    component: AngularConceptsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalAssignmentRoutingModule {}
