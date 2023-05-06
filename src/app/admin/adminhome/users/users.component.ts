import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;
  constructor(private us:UserService){
    us.getUsers().subscribe({
      next:(data:any)=>this.users = data,
      error:()=>this.users = []
    })
  }
}
