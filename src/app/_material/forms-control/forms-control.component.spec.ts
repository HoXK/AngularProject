import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsControlComponent } from "./forms-control.component";

describe("FormsControlComponent", () => {
  let component: FormsControlComponent;
  let fixture: ComponentFixture<FormsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [FormsControlComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
