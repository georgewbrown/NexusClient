import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  typeOfAccount: string
  AccountCreateForm: FormGroup
  submitted: boolean = false

  constructor(public form: MatDialog, private formBuilder: FormBuilder) { }

  openForm(){
    const formRef = this.form.open(AccountCreateComponent);
  }

  ngOnInit() {
  }



}
