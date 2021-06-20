import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-user-input",
  templateUrl: "./about-user-input.component.html",
  styleUrls: ["./about-user-input.component.css"],
})
export class AboutUserInputComponent implements OnInit {
  angularversion: string;
  isgold: boolean;
  constructor() {}

  ngOnInit() {
    this.angularversion = "angular4";
    this.isgold = true;
  }
}
