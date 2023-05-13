import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

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
  users:any;
  eid:any[]=[];
  newchat = true;
  constructor(private cs:ChatService,private us:UserService){
    us.getUsers().subscribe({
      next:(data:any)=>{
        this.users = data  
      },
      error:()=>this.users = []
    })
    cs.getChats().subscribe({
      next:(data:any)=>{
        this.chats = data;
        for(let x of data){
          if(x.id ==localStorage.getItem("id")){
            this.newchat = false;
          }
        }
      },
      error:()=>this.chats = []
    })
    if(localStorage.getItem("usertype")!="admin"){
      cs.getChatsbyId(localStorage.getItem("id")).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>{this.m=[]}
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
  getImg(userName:string){
    for(let x of this.users){
      if(x.username==userName){
        return x.pimg;
      }
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
  ngOnInit(){
    // setInterval(()=>this.getChats(),5000)
    this.getChats()
  }
  getChats(){
    this.m=[]
    this.us.getUsers().subscribe({
      next:(data:any)=>{
        this.users = data  
      },
      error:()=>this.users = []
    })
    this.cs.getChats().subscribe({
      next:(data:any)=>{
        this.chats = data;
        for(let x of data){
          if(x.id ==localStorage.getItem("id")){
            this.newchat = false;
          }
        }
      },
      error:()=>this.chats = []
    })
    if(localStorage.getItem("usertype")!="admin"){
      this.cs.getChatsbyId(localStorage.getItem("id")).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>{this.m=[]}
      })
    }
    else{
      this.cs.getChatsbyId(this.uid).subscribe({
        next:(data:any)=>{
          for(let x of data.messages){
            this.m.push(x)
          }
        },
        error:()=>alert("error")
      })
    }
  }
  onChat(){
    let obj = {
      "id": localStorage.getItem("id"),
      "username": localStorage.getItem("username"),
      "usertype": localStorage.getItem("usertype"),
      "messages": [
        {
          "username": localStorage.getItem("username"),
          "usertype": localStorage.getItem("usertype"),
          "message": "Hi admin, I want to connect with you",
          "date": this.getDate(),
          "pimg": localStorage.getItem("pimg")
        },
      ]
    }
    this.cs.postChats(obj).subscribe({
      next:()=>{this.ngOnInit()},
      error:()=>{alert("error on posting")},
    })
    this.newchat = false;

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
    else{
      ds=""+dd
    }
    if(mm<10)
    {
      ms='0'+mm
    }
    else{
      ms=""+mm
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
