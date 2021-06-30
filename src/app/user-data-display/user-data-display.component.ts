import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Users } from "../_helpers/interfaces/userDetails";
@Component({
  selector: "app-user-data-display",
  templateUrl: "./user-data-display.component.html",
  styleUrls: ["./user-data-display.component.css"],
})
export class UserDataDisplayComponent implements OnInit {
  @Input("userList") UserList: Users[] = [];

  constructor() {
    console.log(this.UserList);
  }

  ngOnInit() {
    //console.log(this.UserList);
    //alert('ngOnInit');
  }

  ngAfterViewChecked() {
    //alert('ngAfterViewChecked');
    if (this.UserList.length > 0) {
      console.log(this.UserList);
    }
  }
}
