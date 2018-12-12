import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employer } from "../models/employer.model";
import { Observable } from "rxjs"


@Injectable()
export class EmployerService {
  constructor(private http: HttpClient) { }

  register(employer: object): Observable<Employer> {
    return this.http.post<Employer>("https://nexuserver.herokuapp.com/business/signup", employer)
  }

  login(employer: object): Observable<Employer> {
    return this.http.post<Employer>("https://nexuserver.herokuapp.com/business/signin", employer)
  }
}