import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  @Input() euser:any;
  email = "";
  username = "";
  type = "";
  firstname = "";
  lastname = "";
  Age = "";
  gender = "";
  Phone = "";
  City = "";
  pimg = "";
  apimg="";
  constructor(private route:ActivatedRoute,private router:Router,private us:UserService) { 
    this.email = this.euser.email;
    this.username = this.euser.username;
    this.type = this.euser.type;
    this.firstname = this.euser.firstname;
    this.lastname = this.euser.lastname;
    this.Age = this.euser.Age;
    this.gender = this.euser.gender;
    this.Phone = this.euser.Phone;
    this.City = this.euser.City;
    this.pimg = this.euser.pimg;
  }
  onPre(){
    this.pimg = this.apimg
  }
  onSub(){
let obj = {
  "email":this.email,
  "username":this.username,
  "type":this.type,
  "firstname":this.firstname,
  "lastname":this.lastname,
  "Age":this.Age,
  "gender":this.gender,
  "Phone":this.Phone,
  "City":this.City,
  "pimg":this.pimg  
}  
this.us.updateUsers(obj,this.euser.id).subscribe({
  next:()=>{
    alert("You Edited a User");
    location.reload();
    },
    error: ()=>alert("there is a problem on editing the User")
  }
  )
  }
}
