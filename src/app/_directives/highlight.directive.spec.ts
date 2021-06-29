import { ElementRef } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";

describe("HighlightDirective", () => {
  let elementRef: ElementRef;

  it("should create an instance", () => {
    const directive = new HighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
