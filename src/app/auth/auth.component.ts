import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from "../services/authentication.service"
import { EmployeeService } from "../services/employee.service";
import { Employee } from "../models/employee"

@Component({templateUrl: 'auth.component.html'})
export class AuthComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    name: string;
    password: string;
    typeOfAccount: string;
    user;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private employeeService: EmployeeService,
        private alertService: AlertService) {}

    ngOnInit() {
        
        this.loginForm = this.formBuilder.group({
            name: [this.name, Validators.required],
            password: [this.password, Validators.required]
        });
        
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    handleName(event: any) {
        this.name = event.target.value
        console.log(this.name)
    }

    handlePassword(event: any) {
        this.password = event.target.value
        console.log(this.password)
    }

    handleAccountType(event) {
        this.typeOfAccount = event.value
    }

    handleUser() {
        if (this.name.includes("@")) {
            this.user = { email: this.name, password: this.password } 
            console.log("email")
        } else {
            this.user = { name: this.name, password: this.password }
            console.log("username")
        }
    }

    onSubmit() {
        this.handleUser()
      this.authenticationService.login(this.user).subscribe(res => console.log(res))
    }

}
