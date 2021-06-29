import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomDatePipe } from "../customDate.pipe";

import { CustomDateComponent } from "./custom-date.component";

describe("CustomDateComponent", () => {
  let component: CustomDateComponent;
  let fixture: ComponentFixture<CustomDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDateComponent, CustomDatePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
