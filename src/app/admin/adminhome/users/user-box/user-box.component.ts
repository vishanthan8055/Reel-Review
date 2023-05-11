import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {
@Input() user:any;
@Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter();
constructor(private us:UserService,private route:ActivatedRoute,private router:Router){
  
}
changeRoute(){
  this.router.navigate(['../edituser'],{relativeTo:this.route,state:this.user});
}
isA(){
  return this.user.type ==="admin"?true:false;
}
isAdmin(){
  if(this.user.type === 'admin'){
    return "card text-white bg-warning mb-3";
  }
  return "card bg-light mb-3";
}
delUser(){
  this.us.deleteUsers(this.user.id).subscribe({
    next:()=>{
      this.ngOnInit.emit();
    },
    error:()=>alert("Failed to delete user")
  })
}
}
