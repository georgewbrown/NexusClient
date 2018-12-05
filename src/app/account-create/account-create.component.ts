import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from "../services/employer.service";
import { EmployeeService } from "../services/employee.service";


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  typeOfAccount: string
  AccountCreateForm: FormGroup
  submitted: boolean = false
  submitDisabled: boolean = true

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private employerService: EmployerService) {}



  ngOnInit() {
    this.AccountCreateForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
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

  get f() { return this.AccountCreateForm.controls; }

  handleButton(event) {
    this.typeOfAccount = event.value
  }

  onSubmit() {
    this.submitted = true

    if (this.typeOfAccount === "freelance") {
      this.employeeService.register(this.AccountCreateForm.value).subscribe(res => console.log(res))
    }

  }

}