import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./_material-routing.module";
import { CardComponentComponent } from "./card-component/card-component.component";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { GridListComponent } from "./grid-list/grid-list.component";
import { FormsControlComponent } from "./forms-control/forms-control.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardComponentComponent,
    GridListComponent,
    FormsControlComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MaterialModule {}
