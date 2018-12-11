import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service"
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountUpdateComponent } from "../account-update/account-update.component"
import { Employee } from '../models/employee.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile
  dialogReturn: MatDialogRef<AccountUpdateComponent>
  posts

  constructor(
    private employeeService: EmployeeService,
    public form: MatDialog,
    private postsService: PostsService
    ) { }

  ngOnInit() {
    this.getAccount()
    // this.getPosts()
  }

  getAccount() {
    this.employeeService.get(sessionStorage.getItem("id")).subscribe(res => this.profile = res)
  }

  openForm() {
    this.dialogReturn = this.form.open(AccountUpdateComponent, {
      data: {
        account: this.profile
      }
    });

    this.dialogReturn.afterClosed().subscribe(res => { this.employeeService.update(res, sessionStorage.getItem("id")).subscribe(res => this.getAccount()) })
  }

  // getPosts() {
  //   this.postsService.getPosts().subscribe((res: any) => { this.posts = res.post, console.log(res.post) })
  // }

}
