import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard {

  constructor(private router: Router) { }

  checkAccount() {
    if (sessionStorage.getItem("account") === "freelance") {
      this.router.navigate(["/account"])
      return true
    } else if (sessionStorage.getItem("account") === "business") {
      this.router.navigate(["/bprofile"])
      return true
    } else {
      this.router.navigate(["/account"])
      return true
    }
  }
}
