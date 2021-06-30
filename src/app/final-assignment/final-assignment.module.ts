import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FinalAssignmentRoutingModule } from "./final-assignment-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AngularConceptsComponent } from "./angular-concepts/angular-concepts.component";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [DashboardComponent, AngularConceptsComponent],
  imports: [
    CommonModule,
    FinalAssignmentRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
})
export class FinalAssignmentModule {}
