import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  adminForm: FormGroup
  
    //Form state
    loading = false;
    success = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  

}

