import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from "../services/posts.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  post;
  dialogReturn: MatDialogRef<JobPostComponent>

  constructor(private postsService: PostsService,
    public form: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.moreInfo()
  }

  moreInfo() {
    this.postsService.getPostsByID(this.data.id).subscribe(res => this.post = res)
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => {this.post = res.post, console.log(res.post)})
  }

  openForm(){
    this.dialogReturn = this.form.open(JobPostComponent);

    this.dialogReturn.afterClosed().subscribe(res => { console.log(res)})
  }
  

}
