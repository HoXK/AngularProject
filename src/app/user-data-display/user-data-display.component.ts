import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Users } from "../_helpers/interfaces/userDetails";
import { UsersService } from "../_services/users.service";

@Component({
  selector: "app-user-data-display",
  templateUrl: "./user-data-display.component.html",
  styleUrls: ["./user-data-display.component.css"],
})
export class UserDataDisplayComponent implements OnInit {
  UserList: Users[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => (this.UserList = data));
  }
}
