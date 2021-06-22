import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submited: boolean;
  usersData: Users;
  @Input("user") user;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {
    this.submited = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      useremail: ["", [Validators.required, Validators.email]],
      country: ["", Validators.required],
      address: ["", Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  handleSubmit() {
    this.submited = true;
    this.usersData = this.registerForm.value;

    this.userService.createUser(this.usersData).subscribe({
      next: (data) => (this.usersData = data),
      error: (error) => {
        console.log(error);
        if (error.status === 404) {
          alert("Please check the API endpoint");
        }
      },
    });
  }
}
