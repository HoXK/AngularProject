import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactUs } from "../_helpers/interfaces/contactUs";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean;
  contactsDetails: ContactUs;
  ContactsArr: ContactUs[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      phoneNumber: [
        "",
        [Validators.pattern("^[+][0-9]*[-][0-9]*$"), Validators.required],
      ],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  handleSubmit() {
    debugger;
    this.submitted = true;
    this.contactsDetails = this.contactForm.value;
    if (sessionStorage.getItem("contacts")) {
      this.ContactsArr.push(JSON.parse(sessionStorage.getItem("contacts")));
    }
    this.ContactsArr.push(this.contactsDetails);
    sessionStorage.setItem("contacts", JSON.stringify(this.ContactsArr));

    alert("Contact Submitted");
    this.contactForm.reset();
  }
}
