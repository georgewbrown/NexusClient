import { Component, OnInit } from '@angular/core';
import { PostsService } from "../services/posts.service";
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  posts;
  dialogReturn: MatDialogRef<JobPostComponent>

  constructor(private postsService: PostsService,
    public form: MatDialog,
    ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => {this.posts = res.post, console.log(res.post)})
  }

  openForm(){
    this.dialogReturn = this.form.open(JobPostComponent);

    this.dialogReturn.afterClosed().subscribe(res => { console.log(res)})
  }
  

}
