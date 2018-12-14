import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  FreelancerUpdateForm: FormGroup;
  BusinessUpdateForm: FormGroup;
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
    this.FreelancerUpdateForm = this.formBuilder.group({
      username: new FormControl ("", Validators.required),
      name: new FormControl("", Validators.required),
      email: new FormControl ("", [Validators.required, Validators.email]),
      password: new FormControl ("", [Validators.required, Validators.minLength(6)]),
      profilePicture: '',
      phoneNumber: '',
      location: '',
      linkdin: '',
      faceBook: '',
      instagram: '',
      twitter: '',
      skills: '',
      about: ''
    });

    this.BusinessUpdateForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      phoneNumber: "",
      location: "",
      website: "",
      about: ""
    })

  }

  submit(AccountUpdateForm) {
    this.matDialogRef.close(AccountUpdateForm.value)

  }
}