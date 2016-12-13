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
import { HomeComponent } from "./home";
import { ProfileComponent } from "./profile";
import { ForgotpwdComponent } from "./forgotpwd";
import { fakeBackendProvider, AuthGuard, GlobalEventsManager, ApplicationDatabase } from './helper';
import { AuthenticationService, UserService, AlertService, ItemService } from "./service";
import { CartComponent } from './cart';
import { ChangepwdComponent } from './changepwd';
import { AlertComponent } from './alert';
import { SettingComponent } from './setting';
import { ItemComponent } from './item';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotpwdComponent,
    CartComponent,
    ChangepwdComponent,
    AlertComponent,
    SettingComponent,
    ItemComponent
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    SettingComponent
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
    ApplicationDatabase,
    AuthGuard,
    UserService,
    AlertService,
    ItemService,
    AuthenticationService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
