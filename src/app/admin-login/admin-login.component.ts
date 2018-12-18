import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { EmployerService } from '../services/employer.service';
import { PostsService } from '../services/posts.service';
import { Employee } from '../models/employee.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AccountUpdateComponent } from '../account-update/account-update.component';
import { UpdatePostComponent } from '../update-post/update-post.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  posts;
  employee;
  employers;
  adminForm: FormGroup
  postReturn: MatDialogRef<UpdatePostComponent>
  accountReturn: MatDialogRef<AccountUpdateComponent>
  error: any;

  constructor(private fb: FormBuilder,
    public form: MatDialog,
    public employeeService: EmployeeService,
    public employerService: EmployerService,
    public postsService: PostsService) { }
  ngOnInit() {
    this.getPosts()
    this.getEmployee()
    this.getEmployer()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => this.posts = res.post)
  }

  postUpdate(post) {
    this.postsService.update(post.id, post).subscribe(res => { console.log(res), this.getPosts() })
  }

  postDelete(id) {
    this.postsService.delete(id).subscribe(res => this.getPosts())
  }

  getEmployee() {
    this.employeeService.getAll().subscribe((res: any) => { this.employee = res.employee })
  }

  employeeUpdate(employee) {
    this.employeeService.update(employee.id, employee).subscribe(res => { console.log(res), this.getEmployee() })
  }

  employeeDelete(id) {
    this.employeeService.delete(id).subscribe(res => this.getEmployee())
  }

  getEmployer() {
    this.employerService.getEmployer().subscribe((res: any) => this.employers = res)

  }
  employerDelete(id) {
    this.employerService.delete(id).subscribe(res => this.getEmployer())
  }

  updatePost(post) {
    this.postReturn = this.form.open(UpdatePostComponent, {
      data: {
        post: post
      }
    });

    this.postReturn.afterClosed().subscribe(res => { this.postsService.update(post.id, res).subscribe(res => { this.getPosts() }) })
  }

  updateAccount(account, type) {
    this.accountReturn = this.form.open(AccountUpdateComponent, {
      data: {
        typeOfAccount: type,
        account: account
      }
    });

    this.accountReturn.afterClosed().subscribe(res => { this.employeeService.update(res, account.id).subscribe(res => { this.getEmployee() }) })
  }

}
