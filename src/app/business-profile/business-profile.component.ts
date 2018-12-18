import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service"
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountUpdateComponent } from "../account-update/account-update.component"
import { Employer } from '../models/employer.model';
import { PostsService } from '../services/posts.service';
import { EmployerService } from '../services/employer.service';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { JobPostComponent } from '../job-post/job-post.component';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})

export class BusinessProfileComponent implements OnInit {
  profile
  dialogReturn: MatDialogRef<AccountUpdateComponent>
  postDialog: MatDialogRef<CreatePostComponent>
  postUpdateReturn: MatDialogRef<UpdatePostComponent>
  posts

  constructor(
    private employerService: EmployerService,
    public form: MatDialog,
    public postForm: MatDialog,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getAccount()
  }

  getAccount() {
    this.employerService.get(sessionStorage.getItem("id")).subscribe(res => { this.profile = res, this.posts = res.posts })
  }

  openForm() {
    this.dialogReturn = this.form.open(AccountUpdateComponent, {
      data: {
        account: this.profile
      }
    });



    this.dialogReturn.afterClosed().subscribe(res => { this.employerService.update(res, sessionStorage.getItem("id")).subscribe(res => {  this.getAccount() }) })
  }

  postCreate(post) {
    this.postsService.create(post).subscribe(res => { this.getAccount() })
  }

  postUpdate(post) {
    this.postsService.update(post.id, post).subscribe(res => { this.getAccount() })
  }

  postDelete(id) {
    this.postsService.delete(id).subscribe(res => this.getAccount())
  }

  createPostDialog() {
    this.postDialog = this.postForm.open(CreatePostComponent, {
      data: {
        account: this.profile.name
      }
    })

    this.postDialog.afterClosed().subscribe(res => { console.log(res), this.postCreate(res) })
  }

  postUpdateDialog(post) {
    this.postUpdateReturn = this.form.open(UpdatePostComponent, {
      data: {
        post: post
      }
    })

    this.postUpdateReturn.afterClosed().subscribe(res => { console.log(res), this.postUpdate(res) })
  }

  moreInfoDialog(id){
    this.form.open(JobPostComponent, {
      data: {
        id: id
      }
    });
  }

}
