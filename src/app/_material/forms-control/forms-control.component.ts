import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { startWith } from "rxjs/operators";

@Component({
  selector: "app-forms-control",
  templateUrl: "./forms-control.component.html",
  styleUrls: ["./forms-control.component.css"],
})
export class FormsControlComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ["Singapore", "India", "USA"];
  filteredOptions: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
