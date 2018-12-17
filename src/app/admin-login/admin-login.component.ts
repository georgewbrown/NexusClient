import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminService } from '../services/admin.service';

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
  
  constructor(private fb: FormBuilder, private as: AdminService) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  async submitHandler() {
    this.loading = true;

    const formValue = this.adminForm.value;

    // try{
    //   await this.as.collection('contacts').add(formValue);
    //   this.success = true;
    // }catch(err) {
    //   console.error(err)
    // }

    this.loading = false
  }


}

