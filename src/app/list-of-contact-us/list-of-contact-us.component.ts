import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-list-of-contact-us",
  templateUrl: "./list-of-contact-us.component.html",
  styleUrls: ["./list-of-contact-us.component.css"],
})
export class ListOfContactUsComponent implements OnInit, AfterViewInit {
  allContactUs = [];
  dataFromChild = [];
  @ViewChild(ContactComponent, { static: false }) child;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataFromChild = this.child.message;
  }

  getSubmittedData(event) {
    this.allContactUs.push(event);
  }
}
