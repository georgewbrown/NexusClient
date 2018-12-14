import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service"
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountUpdateComponent } from "../account-update/account-update.component"
import { Employer } from '../models/employer.model';
import { PostsService } from '../services/posts.service';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})

export class BusinessProfileComponent implements OnInit {
  profile
  dialogReturn: MatDialogRef<AccountUpdateComponent>
  posts

  constructor(
    private employerService: EmployerService,
    public form: MatDialog,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getAccount()
  }

  getAccount() {
    this.employerService.get(sessionStorage.getItem("id")).subscribe(res => {this.profile = res, this.posts = res.posts})
  }

  openForm() {
    this.dialogReturn = this.form.open(AccountUpdateComponent, {
      data: {
        account: this.profile
      }
    });

    this.dialogReturn.afterClosed().subscribe(res => { this.employerService.update(res, sessionStorage.getItem("id")).subscribe(res =>{ console.log(res), this.getAccount()}) })
  }


}
