import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TransferService } from '../services/transfer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EmployeeService } from '../services/employee.service';
import { EmployerService } from '../services/employer.service';

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
    public transferService: TransferService,
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    private matDialogRef: MatDialogRef<AccountUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.AccountUpdateForm = this.formBuilder.group({
      name: this.data.account.name,
      email: this.data.account.email,
      password: this.data.account.password,
      profilePicture: this.data.account.profilePicture,
      phoneNumber: this.data.account.phoneNumber,
      location: this.data.account.location,
      linkdin: this.data.account.linkdin,
      faceBook: this.data.account.faceBook,
      instagram: this.data.account.instagram,
      twitter: this.data.account.twitter,
      skills: this.data.account.skills,
      about: this.data.account.skills,
    });
  }

  submit(AccountUpdateForm) {
      this.matDialogRef.close(AccountUpdateForm.value)

    }
  }

