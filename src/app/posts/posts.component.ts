import { Component, OnInit } from '@angular/core';
import { PostsService } from "../services/posts.service"

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
<<<<<<< HEAD
    this.postsService.getPosts().subscribe((res: any) => {this.posts = res.post, console.log(res.post)})
=======
    this.postsService.getPosts().subscribe((res: any) => {this.posts = res.post, console.log(res)})
>>>>>>> 0d52a02f56ab8aeb4917ce4e65394b46c466de12
  }

}
