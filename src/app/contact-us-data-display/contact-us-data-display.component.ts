import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us-data-display",
  templateUrl: "./contact-us-data-display.component.html",
  styleUrls: ["./contact-us-data-display.component.css"],
})
export class ContactUsDataDisplayComponent implements OnInit {
  @Input() contactUsList = [];

  constructor() {}

  ngOnInit() {}
}
