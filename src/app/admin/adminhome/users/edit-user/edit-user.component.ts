import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

// "email": "",
//   "username": "",
//   "type": "",
//   "firstname": "",
//   "lastname": "",
//   "Age": "",
//   "gender": "",
//   "Phone": "",
//   "City": "",
//   "pimg": "",
export class EditUserComponent {
  state?:any;
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
    this.state=this.router.getCurrentNavigation()?.extras.state;
    this.email = this.state.email;
    this.username = this.state.username;
    this.type = this.state.type;
    this.firstname = this.state.firstname;
    this.lastname = this.state.lastname;
    this.Age = this.state.Age;
    this.gender = this.state.gender;
    this.Phone = this.state.Phone;
    this.City = this.state.City;
    this.pimg = this.state.pimg;
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
this.us.updateUsers(obj,this.state.id).subscribe({
  next:()=>{
    alert("You Edited a User");
    location.reload();
    },
    error: ()=>alert("there is a problem on editing the User")
  }
  )
  }
}

