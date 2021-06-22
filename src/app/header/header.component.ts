import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../_services/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isloggedIn: boolean;

  constructor(private auth: AuthenticationService) {
    this.isloggedIn = false;
  }

  ngOnInit() {
    let user = sessionStorage.getItem("Username");
    let pwd = sessionStorage.getItem("Password");
    this.isloggedIn = user === "admin" && pwd === "admin";
  }

  onLogout() {
    this.auth.logout();
  }
}
