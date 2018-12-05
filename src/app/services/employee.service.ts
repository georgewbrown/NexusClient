import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"


@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  register(employee: object): Observable<any> {
    return this.http.post("https://nexuserver.herokuapp.com/employee/signup", employee)
  }
}