import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BankingComponent } from "../banking.component";

import { BankingDescriptionComponent } from "./banking-description.component";

describe("BankingDescriptionComponent", () => {
  let component: BankingDescriptionComponent;
  let fixture: ComponentFixture<BankingDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankingDescriptionComponent, BankingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
