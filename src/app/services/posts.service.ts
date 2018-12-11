import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token")
  })
}


@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private _URL = "https://nexuserver.herokuapp.com/post"
  constructor(private http: HttpClient) { }



  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this._URL}/all`)  }

  /** POST: add a new hero to the server */
  createPost(post: object) : Observable<any[]>{
    return this.http.post<any[]>(`${this._URL}/create`, post, httpOptions)
  }  
  
  /** PUT: update the hero on the server */
  updatePost(post: object): Observable<any> {
    return this.http.put<any[]>(`${this._URL}/update/${post}`, httpOptions)
  }  
  
  deletePost(id: number) {
    return this.http.delete(`${this._URL}/delete/${id}`, httpOptions)
  }
    
}
