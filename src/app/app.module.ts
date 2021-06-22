import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
  ],
  providers: [UnsavedChangesGuard],
  exports: [HighlightDirective, CustomLoopDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
