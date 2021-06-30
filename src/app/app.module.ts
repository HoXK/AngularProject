import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SliderComponent } from "./slider/slider.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { InsightsComponent } from "./insights/insights.component";
import { IndustriesComponent } from "./industries/industries.component";
import { CareersComponent } from "./careers/careers.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import { ContactDataDisplayComponent } from "./contact-data-display/contact-data-display.component";

// lazy laoded Service module
import { ServicesModule } from "./services/services.module";
import { TaskModule } from "./task/task.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from "./_guards/un-saved-changes-guard.service";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ListOfRegisteredUsersComponent } from "./list-of-registered-users/list-of-registered-users.component";
import { UserDataDisplayComponent } from "./user-data-display/user-data-display.component";
import { HighlightDirective } from "./_directives/highlight.directive";
import { CustomLoopDirective } from "./_directives/custom-loop.directive";
import { SharedModuleModule } from "./_directives/shared-module.module";
import { RxjsOperatorsComponent } from "./rxjs-operators/rxjs-operators.component";
import { CanDeactivateGuardService } from "./task/user/user-edit/can-deactivate-guard.service";
import { userDataDisplayResolverService } from "./task/user/user-data-display/user-data-display-resolver.service";
import { JwtInterceptor } from "./_helpers/jwt-Interceptor";
import { ErrorInterceptor } from "./_helpers/error-Interceptor";
import { MaterialRoutingModule } from "./_material/_material-routing.module";
import { MaterialModule } from "./_material/_material.module";
import { CustomPipeRoutingModule } from "./_custom-pipe/_custom-pipe-routing.module";
import { CustomPipeModule } from "./_custom-pipe/_custom-pipe.module";
import {
  MatAutocompleteModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";
import { FinalAssignmentComponent } from "./final-assignment/final-assignment.component";
import { FinalAssignmentModule } from "./final-assignment/final-assignment.module";
import { FinalAssignmentRoutingModule } from "./final-assignment/final-assignment-routing.module";
import { ThemeService } from "ng2-charts";
import { GlobalErrorHandler } from "./_helpers/global-error-handler";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    InsightsComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    ContactDataDisplayComponent,
    RxjsOperatorsComponent,
    FinalAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    ServicesModule,
    TaskModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    CustomPipeModule,
    CustomPipeRoutingModule,
    FinalAssignmentModule,
    FinalAssignmentRoutingModule,
  ],
  providers: [
    UnsavedChangesGuard,
    CanDeactivateGuardService,
    userDataDisplayResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ,
    ThemeService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  exports: [HighlightDirective, CustomLoopDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
