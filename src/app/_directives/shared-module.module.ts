import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { CustomLoopDirective } from "./custom-loop.directive";
import { RotateAnimationDirective } from "./rotate-animation.directive";
@NgModule({
  declarations: [
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
  ],
  exports: [HighlightDirective, CustomLoopDirective, RotateAnimationDirective],
})
export class SharedModuleModule {}
