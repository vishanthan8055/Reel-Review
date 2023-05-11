import { Component,EventEmitter,Input, Output } from '@angular/core';
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
@Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter();
users:any[]=[];
rforum:any;
isReply=false;
pp="";
rpp="";
constructor(private fs:ForumService,private us:UserService){
  us.getUsers().subscribe({
    next:(data:any)=>{
      this.users=data;
      for(let x of data){
        if(x.username==this.forum.username){
          this.pp = x.pimg
        }
      }

    },
    error:()=>this.users=[]
  })
}
getImg(fusername:string){
  for(let x of this.users){
    if(x.username == fusername){
      return x.pimg;
    }
  }
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
  else{
    ds=""+dd;
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
del(){
  this.fs.deleteForums(this.forum.id).subscribe({
    next:()=>{
      this.ngOnInit.emit()
    },
    error:()=>alert("Failed on deleted"),
  })
}
isCA(){
  if(localStorage.getItem("usertype")=="admin"){
    return true;
  }
  return false;
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
      },
      error:()=>alert("Failed to Reply!!!")
    }
  )
}
}
