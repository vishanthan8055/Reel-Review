import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }
   getcarousel():Observable<any>{
    return this.http.get("http://localhost:3000/660/carousel",this.httpOptions);
  }
  deletecarousel(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/660/carousel/"+id,this.httpOptions);
  }
  postcarousel(obj:any):Observable<any>{  
  return this.http.post("http://localhost:3000/660/carousel/",obj,this.httpOptions);
 }
  editcarousel(obj:any,id:any):Observable<any>{
  return this.http.put("http://localhost:3000/660/carousel/"+id,obj,this.httpOptions);
  }
}
