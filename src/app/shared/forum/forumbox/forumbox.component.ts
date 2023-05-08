import { Component,Input } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forumbox',
  templateUrl: './forumbox.component.html',
  styleUrls: ['./forumbox.component.css']
})
export class ForumboxComponent {
@Input() forum:any;
@Input() user:any;
rforum:any;
isReply=false;
constructor(private fs:ForumService){

}
toggleR(){
  this.isReply = this.isReply===true?false:true;
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
del(){
  this.fs.deleteForums(this.forum.id).subscribe({
    next:()=>{alert("Successfully deleted");
  window.location.reload()},
    error:()=>alert("Failed on deleted"),
  })
}
isA(){
  if(this.forum.usertype === "admin"){
    return true;
  }
  return false;
}
isRa(x:any){
  if(x.usertype === "admin"){
    return true;
  }
  return false;
}
postReply(){
  let r = this.forum.replies;
  let obj = {
    "username":localStorage.getItem("username"),
    "usertype":localStorage.getItem("usertype"),
    "comment":this.rforum,
    "date":this.getDate()
  }
  r.push(obj);
  this.fs.updateForums({"replies":r},this.forum.id).subscribe(
    {
      next:()=>{
        this.isReply = false;
        this.rforum="";
        alert("Successfully Replied!!!");},
      error:()=>alert("Failed to Reply!!!")
    }
  )
}
}
