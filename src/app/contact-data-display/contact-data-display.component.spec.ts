import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactDataDisplayComponent } from "./contact-data-display.component";

describe("ContactUsDataDisplayComponent", () => {
  let component: ContactDataDisplayComponent;
  let fixture: ComponentFixture<ContactDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDataDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
