import { Component, Input } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
@Input() user:any;
forums:any;
uforum:any;
ureplies=[];
constructor(private fs:ForumService){
  fs.getForums().subscribe({
    next:(data:any)=>this.forums=data,
    error:()=>this.forums=[]
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
  let obj = {
    "username":this.user.username,
    "usertype":this.user.type,
    "comment":this.uforum,
    "date":this.getDate(),
    "replies":[]
  }
  this.fs.postForums(obj).subscribe({
    next:()=>{
      alert("Successfully Commented on forum");
      window.location.reload();
  },
    error:()=>alert("Posting comments failed")
  })
}
}
