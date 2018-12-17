import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { EmployerService } from '../services/employer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  typeOfAccount: string
  AccountCreateForm: FormGroup
  submitted: boolean = false
  dialogReturn: MatDialogRef<AccountCreateComponent>

  constructor(
    public form: MatDialog,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    private router: Router
    ) { }

  openForm(){
    this.dialogReturn = this.form.open(AccountCreateComponent);

    this.dialogReturn.afterClosed().subscribe(res => { console.log(res), this.userRegister(res) })
  }

  redirect() {
    if (sessionStorage.getItem("account") === "freelance") {
        this.router.navigate(["/fprofile"])
    } else {
        this.router.navigate(["/bprofile"])
    }
  }

  userRegister(user) {
    if (sessionStorage.getItem("account") === "freelance") {
        this.employeeService.register(user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id), this.redirect() })
    } else {
        this.employerService.register(user).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.business.id), this.redirect() })
    }
}

  ngOnInit() {
  }



}