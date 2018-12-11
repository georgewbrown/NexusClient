import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from "./material.module"
import { MatNativeDateModule } from '@angular/material';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AuthenticationService } from "./services/authentication.service";
import { AlertService } from "./services/alert.service";
import { EmployeeService } from "./services/employee.service";
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountUpdateComponent } from './account-update/account-update.component'
import { AuthenticationGuard } from './guards/authentication.guard';
import { EmployerService } from "./services/employer.service";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TransferService } from "./services/transfer.service"

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    ProfileComponent,
    PostsComponent,
    NavbarComponent,
    AlertComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [HttpClient, AuthenticationService, AlertService, EmployeeService, TransferService, AuthenticationGuard, EmployerService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent],
  entryComponents:[AccountUpdateComponent]
})
export class AppModule { }
