import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"


@Injectable()
export class EmployerService {
  constructor(private http: HttpClient) { }

  register(employer: object): Observable<any> {
    return this.http.post("https://nexuserver.herokuapp.com/busniess/signup", employer)
  }

  login(employer: object): Observable<any> {
    return this.http.post("https://nexuserver.herokuapp.com/busniess/signin", employer)
  }
}