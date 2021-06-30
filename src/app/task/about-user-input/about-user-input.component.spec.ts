import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomLoopDirective } from "src/app/_directives/custom-loop.directive";

import { AboutUserInputComponent } from "./about-user-input.component";

describe("AboutUserInputComponent", () => {
  let component: AboutUserInputComponent;
  let fixture: ComponentFixture<AboutUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AboutUserInputComponent, CustomLoopDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
