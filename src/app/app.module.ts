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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AuthenticationService } from "./services/authentication.service";
import { AlertService } from "./services/alert.service";
import { EmployeeService } from "./services/employee.service";
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    ProfileComponent,
    PostsComponent,
    NavbarComponent,
    AlertComponent,
    EmployeeCreateComponent,
    EmployerCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, AuthenticationService, AlertService, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
