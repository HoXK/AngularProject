import { DebugElement, ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AboutComponent } from "../about/about.component";
import { CustomLoopDirective } from "./custom-loop.directive";
import { RotateAnimationDirective } from "./rotate-animation.directive";

describe("RotateAnimationDirective", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let imgEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        RotateAnimationDirective,
        CustomLoopDirective,
      ],
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    imgEl = fixture.debugElement.query(By.css("img"));
  });

  it("should create an instance", () => {
    const directive = new RotateAnimationDirective(imgEl);
    expect(directive).toBeTruthy();
  });
});
