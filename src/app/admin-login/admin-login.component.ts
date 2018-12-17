import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  adminForm: FormGroup
  
  
  constructor() { }

  ngOnInit() {
    this.adminForm = new FormGroup({
      name: new FormControl()
   });
  }
  

}

