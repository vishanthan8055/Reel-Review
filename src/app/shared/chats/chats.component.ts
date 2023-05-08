import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  chat:any;
  m:any[] = [];
  mes="";
  chats:any;
  uid="1";
  constructor(private cs:ChatService){
    cs.getChats().subscribe({
      next:(data:any)=>this.chats = data,
      error:()=>this.chats = []
    })

    if(localStorage.getItem("usertype")!="admin"){
      cs.getChatsbyId(localStorage.getItem("id")).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>alert("error")
      })
    }
    else{
      cs.getChatsbyId(this.uid).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>alert("error")
      })
    }
  }
  isAdmin(){
    if(localStorage.getItem("usertype") == "admin"){
      return true;
    }
    return false;
  }
  un(id:any){
      this.uid = id;
      this.m = [];
      this.mes="";
      this.cs.getChatsbyId(this.uid).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>alert("error")
      })
      
  }
  getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var ds = ""
    var ms = ""
    var yyyy = today.getFullYear();
    if(dd<10){
      ds='0'+dd
    }
    if(mm<10)
    {
      ms='0'+mm
    }
    return ds+'/'+ms+'/'+yyyy;
  
  }
  onSub(){
    if(this.isAdmin()==true){
      let obj = {
        "username": localStorage.getItem("username"),
        "usertype": localStorage.getItem("usertype"),
        "message": this.mes,
        "date": this.getDate(),
        "pimg": localStorage.getItem("pimg")
      }
    this.m.push(obj);
    this.cs.updateChats({"messages":this.m},this.uid).subscribe({
      next:()=>{let a = ""},
      error:()=>alert("Failed to post"),
    })
    this.mes="";
    }
    else{
    let obj = {
      "username": localStorage.getItem("username"),
      "usertype": localStorage.getItem("usertype"),
      "message": this.mes,
      "date": this.getDate(),
      "pimg": localStorage.getItem("pimg")
    }
    this.m.push(obj);
    this.cs.updateChats({"messages":this.m},localStorage.getItem("id")).subscribe({
      next:()=>{let a = ""},
      error:()=>alert("Failed to post"),
    })
    this.mes="";
  }
}
}
