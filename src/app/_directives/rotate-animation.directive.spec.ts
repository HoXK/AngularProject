import { ElementRef } from "@angular/core";
import { RotateAnimationDirective } from "./rotate-animation.directive";

describe("RotateAnimationDirective", () => {
  let elementRef: ElementRef;

  it("should create an instance", () => {
    const template: ElementRef =
      elementRef.nativeElement.querySelectorAll("img");

    const directive = new RotateAnimationDirective(template);
    expect(directive).toBeTruthy();
  });
});
