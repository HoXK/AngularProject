import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomPipeRoutingModule } from "./_custom-pipe-routing.module";
import { DisplayCustomPipesComponent } from "./displayCustomPipes/displayCustomPipes.component";
import { WelcomePipe } from "./welcome.pipe";
import { StrformatPipe } from "./strformat.pipe";
import { RepeatPipe } from "./repeat.pipe";
import { MyUppercaseOnePipe } from "./myuppercaseone.pipe";
import { MyUppercaseTwoPipe } from "./myuppercasetwo.pipe";
import { CustomDateComponent } from "./custom-date/custom-date.component";
import { CustomDatePipe } from "./customDate.pipe";
import { CompanyOnePipe } from "./CompanyOne.pipe";
import { CompanyTwoPipe } from "./companyTwo.pipe";
import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";

@NgModule({
  declarations: [
    DisplayCustomPipesComponent,
    StrformatPipe,
    RepeatPipe,
    WelcomePipe,
    MyUppercaseOnePipe,
    MyUppercaseTwoPipe,
    CustomDateComponent,
    CustomDatePipe,
    CompanyTwoPipe,
    CompanyOnePipe,
    AsyncPipeComponent,
  ],
  imports: [CommonModule, CustomPipeRoutingModule],
})
export class CustomPipeModule {}
