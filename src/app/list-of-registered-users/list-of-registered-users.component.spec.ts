import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { UserDataDisplayComponent } from "../user-data-display/user-data-display.component";
import { HighlightDirective } from "../_directives/highlight.directive";

import { ListOfRegisteredUsersComponent } from "./list-of-registered-users.component";

describe("ListOfRegisteredUsersComponent", () => {
  let component: ListOfRegisteredUsersComponent;
  let fixture: ComponentFixture<ListOfRegisteredUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        ListOfRegisteredUsersComponent,
        SignUpComponent,
        UserDataDisplayComponent,
        HighlightDirective,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
