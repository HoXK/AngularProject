import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  createForm: FormGroup;
  submited: boolean;
  usersData: Users;
  @Input("user") user;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.submited = false;
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      country: ["", Validators.required],
      address: ["", Validators.required],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submited = true;
    this.userService.createUser(this.createForm.value);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
