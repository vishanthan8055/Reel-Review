import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-aforum',
  templateUrl: './aforum.component.html',
  styleUrls: ['./aforum.component.css']
})
export class AforumComponent {
  user:any;
  constructor(private us:UserService){
    us.getUsersbyId(localStorage.getItem("id")).subscribe({
      next:(data:any)=>this.user=data,
      error:()=>this.user=[]
    })
  }
}
