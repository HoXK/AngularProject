import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Users } from "src/app/_helpers/interfaces/userDetails";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  editForm: FormGroup;
  submited: boolean;
  user: Users;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.submited = false;
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [""],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      country: ["", Validators.required],
      address: ["", Validators.required],
    });

    this.userService.getUser(this.route.snapshot.params["id"]);
    this.route.params.subscribe((param: Params) => {
      this.userService.getUser(param["id"]).subscribe({
        next: (data) => {
          this.user = data[0];
          this.editForm.patchValue(this.user);
        },
        error: (error) => {
          if (error.status === 404) {
            alert("Please check the API endpoint");
          }
        },
      });
    });
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    if (confirm("Submit editing?")) {
      this.userService.editUser(this.editForm.value);
      this.router.navigate(["/task", "user"]);
    }
  }
}
