import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {

adminForm: FormGroup

error: any;
  constructor(private fb: FormBuilder, public es: EmployeeService,) {}


  ngOnInit(){
    this.adminForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}