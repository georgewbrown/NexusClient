import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  AccountCreateForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}



  ngOnInit() {
    this.AccountCreateForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      profilepicture: '',
      phonenumber: '',
      location: '',
      linkdin: '',
      facebook: '',
      instagram: '',
      twitter: '',
      skills: '',
      about: '',


  });
  }

}