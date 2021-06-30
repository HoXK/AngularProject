import { Component, OnInit } from "@angular/core";
import { AngularConcepts } from "./angular-concepts";
import { AngularConceptsService } from "./angular-concepts.service";

@Component({
  selector: "app-angular-concepts",
  templateUrl: "./angular-concepts.component.html",
  styleUrls: ["./angular-concepts.component.css"],
})
export class AngularConceptsComponent implements OnInit {
  angularConcepts: AngularConcepts[];

  constructor(private acService: AngularConceptsService) {}

  ngOnInit() {
    this.acService
      .getAllAngularConcepts()
      .subscribe((data) => (this.angularConcepts = data));
  }
}
