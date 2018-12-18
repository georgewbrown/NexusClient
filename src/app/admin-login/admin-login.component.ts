import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { EmployerService } from '../services/employer.service';
import { PostsService } from '../services/posts.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  id = sessionStorage.getItem("id")
  posts;
  employee;
  adminForm: FormGroup

error: any;
  constructor(private fb: FormBuilder, 
    public employeeService: EmployeeService,
    public employeerService: EmployerService,
    public postsService: PostsService) {}
  ngOnInit(){
    this.getPosts()
    // this.getEmployee(this.id)
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => this.posts = res.post)
  }
  postUpdate(post) {
    this.postsService.update(post.id, post).subscribe(res => { console.log(res), this.getPosts() })
  }

  postDelete(id) {
    this.postsService.delete(id).subscribe(res => this.getPosts())
    console.log('this button works')
  }
  // getEmployee() {
  //   this.employeeService.getEmployee().subscribe((res: any) => this.employee = res.employee)
  // }
  // employeeUpdate(employee) {
  //   this.employeeService.update(employee.id, employee).subscribe(res => { console.log(res), this.getEmployee() })
  // }

  // employeeDelete(id) {
  //   this.employeeService.delete(id).subscribe(res => this.getAll())
  // }


  // employeeDelete(id) {
  //   this.employeeService.delete(id).subscribe(res => this.getAll())
  // }


}
