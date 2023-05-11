import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent {
  user={
    "email":"",
  "username":"",
  "type":"",
  "firstname":"",
  "lastname":"",
  "Age":"",
  "gender":"",
  "Phone":"",
  "City":"",
  "pimg":""
  };
  constructor(private us:UserService){
    us.getUsersbyId(localStorage.getItem("id")).subscribe({
      next:(data:any)=>{
        alert(data)
        this.user.email=data.email;
        this.user.username=data.username;
        this.user.type=data.type;
        this.user.firstname=data.firstname;
        this.user.lastname=data.lastname;
        this.user.Age=data.Age;
        this.user.gender=data.gender;
        this.user.Phone=data.Phone;
        this.user.City=data.City;
        this.user.pimg=data.pimg;
      },
      error:()=>alert("getting error"),
    })
  }
}
