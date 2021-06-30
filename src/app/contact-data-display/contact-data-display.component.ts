import { Component, OnInit } from "@angular/core";
import { ContactUs } from "../_helpers/interfaces/contactUs";

@Component({
  selector: "app-contact-data-display",
  templateUrl: "./contact-data-display.component.html",
  styleUrls: ["./contact-data-display.component.css"],
})
export class ContactDataDisplayComponent implements OnInit {
  contacts: ContactUs[] = [];

  constructor() {}

  ngOnInit() {
    this.contacts = JSON.parse(sessionStorage.getItem("contacts"));
  }
}
