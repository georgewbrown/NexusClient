import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from "../services/employer.service";
import { EmployeeService } from "../services/employee.service";
import { Employee } from '../models/employee.model';
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  typeOfAccount: string
  AccountCreateForm: FormGroup
  submitted: boolean = false
  employee: object

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    public transferService: TransferService,
    private router: Router
    ) { }



  ngOnInit() {
    this.AccountCreateForm = this.formBuilder.group({
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
    this.setValue()
  }

  get f() { return this.AccountCreateForm.controls; }

  setValue() {
    this.typeOfAccount = ""
  }

  handleButton(event) {
    this.typeOfAccount = event.value
  }

  redirect() {
    this.router.navigate(['/profile'])
}

  saveEmployee() {
    return new Employee().deserialize(this.AccountCreateForm.value)
  }

  onSubmit() {
    this.submitted = true

    if (this.typeOfAccount === "freelance") {
      this.employee = this.saveEmployee()
      this.employeeService.register(this.employee).subscribe(res => { console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem("id", res.employee.id), sessionStorage.setItem("account", this.typeOfAccount), this.redirect() })
    }

  }

}