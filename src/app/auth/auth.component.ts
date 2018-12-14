import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from "../services/authentication.service"
import { EmployeeService } from "../services/employee.service";
import { EmployerService } from "../services/employer.service"
import { Employee } from "../models/employee.model"
import { AccountCreateComponent } from '../account-create/account-create.component';
import { MatDialog, MatDialogRef, ErrorStateMatcher } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { TransferService } from '../services/transfer.service';

@Component({
    selector: 'auth-component',
    templateUrl: 'auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    loginForm: FormGroup
    returnUrl: string
    name: string
    password: string
    typeOfAccount: string
    user
    dialogReturn: MatDialogRef<AccountCreateComponent>
    matcher = new MyErrorStateMatcher
    submitted: boolean = false


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private employerService: EmployerService,
        private employeeService: EmployeeService,
        private alertService: AlertService,
        public form: MatDialog,
        private router: Router,
        public transferService: TransferService
    ) { }

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
            this.user = { username: this.name, password: this.password }
        }
    }

    redirect() {
        if (sessionStorage.getItem("account") === "freelance") {
            this.router.navigate(["/fprofile"])
        } else {
            this.router.navigate(["/bprofile"])
        }
    }

    onSubmit() {
        this.handleUser()
        if (this.typeOfAccount === "freelance") {
            this.employeeService.login(this.user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id), sessionStorage.setItem("account", this.typeOfAccount), this.redirect() })
        } else {
            this.employerService.login(this.user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.business.id), sessionStorage.setItem("account", this.typeOfAccount), this.redirect() })
        }

    }

    userRegister(user) {
        if (sessionStorage.getItem("account") === "freelance") {
            this.employeeService.register(user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id), this.redirect() })
        } else {
            this.employerService.register(user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.business.id), this.redirect() })
        }
    }

    openForm() {
        this.dialogReturn = this.form.open(AccountCreateComponent);

        this.dialogReturn.afterClosed().subscribe(res => { console.log(res), this.userRegister(res) })
    }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
