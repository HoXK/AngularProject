import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-displayCustomPipes",
  templateUrl: "./displayCustomPipes.component.html",
  styleUrls: ["./displayCustomPipes.component.css"],
})
export class DisplayCustomPipesComponent implements OnInit {
  part: string;
  message: string;
  user: any;
  today: any;

  constructor() {
    this.message = "Custom Pipe Examples";
    this.user = {
      firstname: "john",
      lastname: "doe",
    };
  }

  ngOnInit() {
    this.part = "4";
    this.today = new Date();
  }
}
