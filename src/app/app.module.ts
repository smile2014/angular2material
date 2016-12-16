import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { ProfileComponent } from "./profile";
import { ForgotpwdComponent } from "./forgotpwd";
import { fakeBackendProvider, AuthGuard, GlobalEventsManager } from './helper';
import { AuthenticationService, UserService, AlertService, SidemenuService } from "./service";
import { ChangepwdComponent } from './changepwd';
import { AlertComponent } from './alert';
import { DashboardComponent } from './dashboard';
import { AdmissionComponent } from './admission';
import { StudentComponent } from './student';
import { AttendanceComponent } from './attendance';
import { TimetableComponent } from './timetable';
import { ExaminationComponent } from './examination';
import { FinanceComponent } from './finance';
import { HrComponent } from './hr';
import { UtilityComponent } from './utility';
import { ReportComponent } from './report';
import { LinkComponent } from './link';
import { FeeComponent } from './fee';
import { LibraryComponent } from './library';
import { ComplainComponent } from './complain';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotpwdComponent,
    ChangepwdComponent,
    AlertComponent,
    DashboardComponent,
    AdmissionComponent,
    StudentComponent,
    AttendanceComponent,
    TimetableComponent,
    ExaminationComponent,
    FinanceComponent,
    HrComponent,
    UtilityComponent,
    ReportComponent,
    LinkComponent,
    FeeComponent,
    LibraryComponent,
    ComplainComponent,
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    GlobalEventsManager,
    SidemenuService,
    AuthGuard,
    UserService,
    AlertService,
    AuthenticationService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
