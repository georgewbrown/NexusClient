import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service"
import { MatDialog } from '@angular/material';
import { AccountUpdateComponent } from "../account-update/account-update.component"
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile

  constructor(private employeeService: EmployeeService, public form: MatDialog) { }

  ngOnInit() {
    this.employeeService.get(sessionStorage.getItem("id")).subscribe(res => this.profile = res)
  }

  update() {
    // this.employeeService.update( ,sessionStorage.getItem("id"))
  }

  openForm(){
    const formRef = this.form.open(AccountUpdateComponent, {
      data: {
        account: this.profile
      }
    });

    formRef.afterClosed()
  }

}
