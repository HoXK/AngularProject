import { Component, OnInit } from "@angular/core";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-user-data-display",
  templateUrl: "./user-data-display.component.html",
  styleUrls: ["./user-data-display.component.css"],
})
export class UserDataDisplayComponent implements OnInit {
  users: Users[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        if (error.status === 404) {
          alert("Please check the API endpoint");
        }
      },
    });
  }

  onDelete(userId: number) {
    this.userService.deleteUser(userId);
  }
}
