import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent {
  @Input() review:any;
  users:any;
  constructor(private us:UserService){
      us.getUsers().subscribe({
        next:(data:any)=>this.users=data,
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
}
