import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from "../services/authentication.service"
import { EmployeeService } from "../services/employee.service";
import { EmployerService } from "../services/employer.service"
import { Employee } from "../models/employee.model"
import { AccountCreateComponent } from '../account-create/account-create.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'auth-component',
    templateUrl: 'auth.component.html',
    styleUrls: ['./auth.component.css']
})
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
        private employerService: EmployerService,
        private employeeService: EmployeeService,
        private alertService: AlertService,
        public form: MatDialog,) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: [this.name, Validators.required],
            password: [this.password, Validators.required]
        });
        
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    handleName(event: any) {
        this.name = event.target.value
    }

    handlePassword(event: any) {
        this.password = event.target.value
    }

    handleAccountType(event) {
        this.typeOfAccount = event.value
    }

    handleUser() {
        if (this.name.includes("@")) {
            this.user = { email: this.name, password: this.password } 
        } else {
            this.user = { name: this.name, password: this.password }
        }
    }

    onSubmit() {
        this.handleUser()
        if (this.typeOfAccount === "freelance") {
            this.employeeService.login(this.user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id)})
        } else {
            this.employerService.login(this.user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id)})
        }
      
    }

    openForm(){
        const formRef = this.form.open(AccountCreateComponent);
    
        formRef.afterClosed()
      }

}
