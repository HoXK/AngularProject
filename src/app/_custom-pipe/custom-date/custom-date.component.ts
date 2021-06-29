import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-date",
  templateUrl: "./custom-date.component.html",
  styleUrls: ["./custom-date.component.css"],
})
export class CustomDateComponent implements OnInit {
  part: string;
  today: Date;

  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
    this.part = "1";
  }
}
