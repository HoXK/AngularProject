import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactUs } from "../_helpers/interfaces/contactUs";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted: boolean;
  contactUsDetails: ContactUs;
  @Output() PostDetails = new EventEmitter<ContactUs>();

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
  }

  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    });
  }

  get f() {
    return this.contactUsForm.controls;
  }

  handleSubmit() {
    this.submitted = true;
    this.contactUsDetails = this.contactUsForm.value;
    this.PostDetails.emit(this.contactUsDetails);
  }
}
