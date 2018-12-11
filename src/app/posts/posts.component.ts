import { Component, OnInit } from '@angular/core';
import { PostsService } from "../services/posts.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => {this.posts = res.post, console.log(res.post)})
  }

}