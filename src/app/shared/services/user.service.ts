import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }
   getUsers():Observable<any>{
    return this.http.get("http://localhost:3000/660/users",this.httpOptions);
  }
  getUsersbyId(id:any):Observable<any>{
    return this.http.get("http://localhost:3000/660/users/"+id,this.httpOptions);
  }
  deleteUsers(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/660/users/"+id,this.httpOptions);
  }
  postUsers(obj:any):Observable<any>{  
  return this.http.post("http://localhost:3000/660/users/",obj,this.httpOptions);
 }
  editUsers(obj:any,id:any):Observable<any>{
    return this.http.put("http://localhost:3000/660/users/"+id,obj,this.httpOptions);
  }
  updateUsers(obj:any,id:any):Observable<any>{
    return this.http.patch("http://localhost:3000/660/users/"+id,obj,this.httpOptions);
  }
}
