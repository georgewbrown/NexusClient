import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  UpdatePostForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private matDialogRef: MatDialogRef<UpdatePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.UpdatePostForm = this.formBuilder.group({
      id: this.data.post.id,
      name: this.data.post.name,
      jobTitle: this.data.post.jobTitle,
      location: this.data.post.location,
      payRange: this.data.post.payRange,
      skills: this.data.post.skills,
      jobDescription: this.data.post.jobDescription,
    })
  }

  submit(Form) {
    this.matDialogRef.close(Form.value)
  }

}
