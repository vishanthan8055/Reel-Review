import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cbox',
  templateUrl: './cbox.component.html',
  styleUrls: ['./cbox.component.css']
})
export class CboxComponent {
  @Input() message:any;
  // chat-message left
  // chat-message right
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
