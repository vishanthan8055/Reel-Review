import { Component, Input } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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
forumform:any;
constructor(private fs:ForumService,private r:Router,private fb:FormBuilder){
  fs.getForums().subscribe({
    next:(data:any)=>this.forums=data,
    error:()=>this.forums=[]
  })
  this.forumform = this.fb.group({
    fuforum:['',[Validators.required,Validators.minLength(5)]],
  });
}
ngOnInit(){
  this.fs.getForums().subscribe({
    next:(data:any)=>this.forums=data,
    error:()=>this.forums=[]
  })
  this.forumform = this.fb.group({
    fuforum:['',[Validators.required,Validators.minLength(5)]],
  });
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

onSub(){
  let obj = {
    "username":this.user.username,
    "usertype":this.user.type,
    "comment":this.forumform.value.fuforum,
    "date":this.getDate(),
    "replies":[]
  }
  this.fs.postForums(obj).subscribe({
    next:()=>{
      this.ngOnInit();
  },
    error:()=>alert("Posting comments failed")
  })
}
}
