import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+localStorage.getItem("token")
      })
    }
   }

  getChats():Observable<any>{
    return this.http.get("http://localhost:3000/660/chat",this.httpOptions);
  }
  getChatsbyId(id:any):Observable<any>{
    return this.http.get("http://localhost:3000/660/chat/"+id,this.httpOptions);
  }
  deleteChats(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/660/chat/"+id,this.httpOptions);
  }
  postChats(obj:any):Observable<any>{  
  return this.http.post("http://localhost:3000/660/chat/",obj,this.httpOptions);
 }
  editChats(obj:any,id:any):Observable<any>{
  return this.http.put("http://localhost:3000/660/chat/"+id,obj,this.httpOptions);
  }
  updateChats(obj:any,id:any):Observable<any>{
    return this.http.patch("http://localhost:3000/660/chat/"+id,obj,this.httpOptions);
  }
}
