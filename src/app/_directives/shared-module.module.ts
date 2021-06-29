import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { CustomLoopDirective } from "./custom-loop.directive";
import { RotateAnimationDirective } from "./rotate-animation.directive";
import { CountryCodeDirective } from "./country-code.directive";

@NgModule({
  declarations: [
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    CountryCodeDirective,
  ],
  exports: [
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    CountryCodeDirective,
  ],
})
export class SharedModuleModule {}
