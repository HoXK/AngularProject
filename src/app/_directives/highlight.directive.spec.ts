import { ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { HighlightDirective } from "./highlight.directive";

describe("HighlightDirective", () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [HighlightDirective, SignUpComponent],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
  });

  it("should create an instance", () => {
    const directive = new HighlightDirective(fixture);
    expect(directive).toBeTruthy();
  });
});
