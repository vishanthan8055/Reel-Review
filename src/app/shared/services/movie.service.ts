import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }
   getMovies():Observable<any>{
    return this.http.get("http://localhost:3000/660/movies",this.httpOptions);
  }
  deleteMovies(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/660/movies/"+id,this.httpOptions);
  }
  postMovies(obj:any):Observable<any>{  
  return this.http.post("http://localhost:3000/660/movies/",obj,this.httpOptions);
 }
  editMovies(obj:any,id:any):Observable<any>{
  return this.http.put("http://localhost:3000/660/movies/"+id,obj,this.httpOptions);
  }

}
