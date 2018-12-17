import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  CreatePostForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private matDialogRef: MatDialogRef<CreatePostComponent>
  ) { }

  ngOnInit() {
    this.CreatePostForm = this.formBuilder.group({
      name: "",
      jobTitle: "",
      location: "",
      payRange: "",
      skills: "",
      jobDescription: "",
    })
  }

  submit(Form) {
    this.matDialogRef.close(Form.value)
  }

}
