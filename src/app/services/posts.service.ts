import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "../models/post";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": sessionStorage.getItem("token")
  })
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private _URL = "https://nexuserver.herokuapp.com/post"
  constructor(private http: HttpClient) { }


  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this._URL}/all`)
  }

  getPostsByID(id: string): Observable<any> {
    return this.http.get<any>(`https://nexuserver.herokuapp.com/post/${id}`)
  }

  create(post: object): Observable<any> {
    return this.http.post("https://nexuserver.herokuapp.com/post/create", post, httpOptions)
  }

  update(post: object): Observable<any> {
    return this.http.put("https://nexuserver.herokuapp.com/post/update", post, httpOptions)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`https://nexuserver.herokuapp.com/post/delete/${id}`, httpOptions)
  }

}
