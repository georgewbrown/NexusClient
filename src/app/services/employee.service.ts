import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import { Employee } from "../models/employee.model"

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": sessionStorage.getItem("token")
  })
}

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  register(employee: object): Observable<Employee> {
    return this.http.post<Employee>("https://nexuserver.herokuapp.com/employee/signup", employee)
  }

  login(employee: object): Observable<Employee> {
    return this.http.post<Employee>("https://nexuserver.herokuapp.com/employee/signin", employee)
  }

  get(id: string): Observable<Employee> {
    return this.http.get<Employee>(`https://nexuserver.herokuapp.com/employee/${id}`, httpOptions)
  }

  getAll(): Observable<Employee> {
    return this.http.get<Employee>("https://nexuserver.herokuapp.com/employee/all", httpOptions)
  }

  update(employee: object, id: string): Observable<Employee> {
    return this.http.put<Employee>(`https://nexuserver.herokuapp.com/employee/update/${id}`, httpOptions, employee)
  }
}