import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }
   getForums():Observable<any>{
    return this.http.get("http://localhost:3000/660/forum",this.httpOptions);
  }
  deleteForums(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/660/forum/"+id,this.httpOptions);
  }
  postForums(obj:any):Observable<any>{  
  return this.http.post("http://localhost:3000/660/forum/",obj,this.httpOptions);
 }
  editForums(obj:any,id:any):Observable<any>{
  return this.http.put("http://localhost:3000/660/forum/"+id,obj,this.httpOptions);
  }
  updateForums(obj:any,id:any):Observable<any>{
    return this.http.patch("http://localhost:3000/660/forum/"+id,obj,this.httpOptions);
  }
}
