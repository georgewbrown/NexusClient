import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  isLoggedIn = sessionStorage.getItem("account")

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear()
    this.handleAccount()
  }

  handleAccount() {
    if (sessionStorage.getItem("account") === "freelance") {
      this.router.navigate(["/fprofile"])
    } else if (sessionStorage.getItem("account") === "busniess") {
      this.router.navigate(["/bprofile"])
    } else {
      this.router.navigate(["/account"])
    }
  }

}