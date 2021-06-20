import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
})
export class RecipeComponent implements OnInit {
  @ViewChild("receipeNumber", { static: false }) receipeNumber: ElementRef;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.receipeNumber.nativeElement.value);
  }
}
