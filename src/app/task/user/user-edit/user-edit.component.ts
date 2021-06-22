import { Component, OnInit } from "@angular/core";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  user: Users;
  constructor(private userService: UsersService) {}

  ngOnInit() {}

  onSubmit(user) {
    this.userService.editUser(user);
  }
}
