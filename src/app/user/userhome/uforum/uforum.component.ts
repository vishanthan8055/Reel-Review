import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-uforum',
  templateUrl: './uforum.component.html',
  styleUrls: ['./uforum.component.css']
})
export class UforumComponent {
user:any;
constructor(private us:UserService){
  us.getUsersbyId(localStorage.getItem("id")).subscribe({
    next:(data:any)=>this.user=data,
    error:()=>this.user=[]
  })
}
}
