import { TemplateRef, ViewContainerRef } from "@angular/core";
import { CustomLoopDirective } from "./custom-loop.directive";

describe("CustomLoopDirective", () => {
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;
  it("should create an instance", () => {
    const directive = new CustomLoopDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
