import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isloggedIn: boolean;

  constructor() {
    this.isloggedIn = false;
  }

  ngOnInit() {
    let user = sessionStorage.getItem("Username");
    let pwd = sessionStorage.getItem("Password");
    this.isloggedIn = user === "admin" && pwd === "admin";
  }
}
