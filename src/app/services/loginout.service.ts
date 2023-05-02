import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginoutService {
 httpOptions:any;
 username:String='';
 usertype:String='';
 token:any='';
 email:any='';
 status:boolean=false;
  constructor(private http:HttpClient) {
    let username=localStorage.getItem("username");
      let usertype=localStorage.getItem("usertype");
      let token=localStorage.getItem("token");
      let email=localStorage.getItem("email");
      if(username&&usertype){
        this.status=true;
        this.username=username;
        this.usertype=usertype;
        this.token=token;
        this.email=email;
      }
   }

  getStatus():boolean{
    return this.status;
  }
  register(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    return this.http.post("http://localhost:3000/register",obj,this.httpOptions);
  }

  check(str:any):Observable<object>{
    return this.http.get("http://localhost:3000/users?username"+str,this.httpOptions);
  }

  login(email:any,password:any):Observable<object>{
 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
  
      })
    }
    return this.http.post("http://localhost:3000/login",
    {
      email:email,
      password:password
    },
    this.httpOptions);
  }

  logout():void{
    this.token="";
    this.username="";
    this.usertype="";
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("usertype");
    localStorage.removeItem("email");
 }
}
