import { Component, OnInit,HostBinding } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {

error: any;
  constructor(public as: AdminService, private router: Router) {

    this.as.auth.subscribe( auth => {
      if(auth) {
        this.router.navigateByUrl('/landing');
      }
    });
   }

  ngOnInit(){

  }

}