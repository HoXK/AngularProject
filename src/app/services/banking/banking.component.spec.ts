import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BankingDescriptionComponent } from "./banking-description/banking-description.component";
import { BankingTitleComponent } from "./banking-title/banking-title.component";

import { BankingComponent } from "./banking.component";

describe("BankingComponent", () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BankingComponent,
        BankingTitleComponent,
        BankingDescriptionComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
