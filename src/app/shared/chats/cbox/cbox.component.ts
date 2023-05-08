import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cbox',
  templateUrl: './cbox.component.html',
  styleUrls: ['./cbox.component.css']
})
export class CboxComponent {
  @Input() message:any;
  users:any;
  pp="";
  // chat-message left
  // chat-message right
  constructor(private us:UserService){
    us.getUsers().subscribe({
      next:(data:any)=>{
        this.users=data;
        for(let x of data){
          if(x.username==this.message.username){
            this.pp = x.pimg
          }
        }
  
      },
      error:()=>this.users=[]
    })
  }
  isA(){
    if(localStorage.getItem("id") ==  "admin"){
      return true;
    }
    return false;
  }
  ch(){
    if(this.message.username == localStorage.getItem("username")){
      return "chat-message right";
    }
    return "chat-message left"
  }
}
