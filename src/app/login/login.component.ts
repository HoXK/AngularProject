import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginUser } from "../_helpers/interfaces/LoginUser";
import { AuthenticationService } from "../_services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: LoginUser;
  pass: string;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.auth
      .login(form.controls["username"].value, form.controls["password"].value)
      .subscribe((data) => this.router.navigate(["../"]));
  }
}
