import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }
   getReviews():Observable<any>{
    return this.http.get("http://localhost:3000/660/reviews",this.httpOptions);
  }
  postReviews(obj:any):Observable<any>{  
    return this.http.post("http://localhost:3000/660/reviews/",obj,this.httpOptions);
   }
}
