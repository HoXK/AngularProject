import { ElementRef } from "@angular/core";
import { RotateAnimationDirective } from "./rotate-animation.directive";

describe("RotateAnimationDirective", () => {
  let elementRef: ElementRef;

  it("should create an instance", () => {
    const directive = new RotateAnimationDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
