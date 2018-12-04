import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  signup(employee: Employee) {
    return this.http.post("http://localhost:3000/employee/signup", employee)
  }
}