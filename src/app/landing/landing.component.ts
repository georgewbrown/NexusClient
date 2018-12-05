import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AccountCreateComponent } from '../account-create/account-create.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public form: MatDialog) { }

  openForm(){
    const formRef = this.form.open(AccountCreateComponent);

    formRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  ngOnInit() {
  }

}
