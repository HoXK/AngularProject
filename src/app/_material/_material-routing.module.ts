import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsControlComponent } from "./forms-control/forms-control.component";
import { GridListComponent } from "./grid-list/grid-list.component";

const routes: Routes = [
  {
    path: "",
    component: GridListComponent,
  },
  {
    path: "forms-control",
    component: FormsControlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
