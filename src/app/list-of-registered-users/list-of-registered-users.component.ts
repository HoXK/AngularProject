import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: "app-list-of-registered-users",
  templateUrl: "./list-of-registered-users.component.html",
  styleUrls: ["./list-of-registered-users.component.css"],
})
export class ListOfRegisteredUsersComponent implements OnInit, AfterViewInit {
  // allUser = [];
  usersFromChild = [];
  user = {
    name: "Alex",
  };
  @ViewChild(SignUpComponent, { static: true }) child;

  constructor() {}
  ngOnInit() {}

  // getRegisteredUser(event){
  //   this.allUser.push(event);
  // }

  ngAfterViewInit() {
    this.usersFromChild = this.child.message;
  }
  ngAfterViewChecked() {
    this.usersFromChild = this.child.usersData;
  }

  // updateUser() {
  //   this.user.name = "Murali";
  // }
}
