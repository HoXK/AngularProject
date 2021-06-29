/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { DisplayCustomPipesComponent } from "./displayCustomPipes.component";
import { WelcomePipe } from "../welcome.pipe";
import { StrformatPipe } from "../strformat.pipe";
import { RepeatPipe } from "../repeat.pipe";
import { MyUppercaseTwoPipe } from "../myuppercasetwo.pipe";

describe("DisplayCustomPipesComponent", () => {
  let component: DisplayCustomPipesComponent;
  let fixture: ComponentFixture<DisplayCustomPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayCustomPipesComponent,
        WelcomePipe,
        StrformatPipe,
        RepeatPipe,
        MyUppercaseTwoPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
