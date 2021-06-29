import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DisplayCustomPipesComponent } from "./displayCustomPipes/displayCustomPipes.component";
import { CustomDateComponent } from "./custom-date/custom-date.component";

const routes: Routes = [
  {
    path: "",
    component: DisplayCustomPipesComponent,
  },
  {
    path: "custom-date",
    component: CustomDateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class CustomPipeRoutingModule {}
