import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Data } from "@angular/router";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-user-data-display",
  templateUrl: "./user-data-display.component.html",
  styleUrls: ["./user-data-display.component.css"],
})
export class UserDataDisplayComponent implements OnInit {
  users: Users[];

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.users = data["users"];
    });
    // this.getAllUsers();
  }

  onDelete(userId: number) {
    if (confirm("Are you sure to delete " + userId)) {
      this.userService.deleteUser(userId).subscribe({
        next: () => this.getAllUsers(),
      });
    }
  }

  getAllUsers() {
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
}
