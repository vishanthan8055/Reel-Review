import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css']
})
export class MovieboxComponent {
  @Input() movie:any;
  user:any;
  uid:any;
  constructor(public router:Router,public route:ActivatedRoute,private us:UserService) {
    this.uid=localStorage.getItem("id")
    us.getUsersbyId(this.uid).subscribe({
      next:(data:any)=>this.user=data,
      error:()=>this.user=[]
    })
   }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.user.watchlist.includes(this.movie.title)){
      alert(this.movie.title+" is already added:)")
    }
    else{
      this.user.watchlist.push(this.movie.title);
      this.us.updateUsers({"watchlist":this.user.watchlist},this.uid).subscribe({
        next:()=>alert(this.movie.title+" is successfully added to favorites!!!"),
        error:()=>alert("Error on adding to favorites...")
      });
    }
    location.reload();
  }

  changeRoute(){
    this.router.navigate(['details'],{relativeTo:this.route,state:this.movie});
  }
}
