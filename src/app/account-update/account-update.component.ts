import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  AccountUpdateForm: FormGroup
  account

  constructor(
    private formBuilder: FormBuilder,
    private transferService: TransferService
    ) { }

  ngOnInit() {
    this.AccountUpdateForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      profilePicture: '',
      phoneNumber: '',
      location: '',
      linkdin: '',
      faceBook: '',
      instagram: '',
      twitter: '',
      skills: '',
      about: '',
    });
    this.getAccount()
  }

  getAccount() {
    this.account = this.transferService.getData().console.log(this.account)
    
  }

}
