import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-watchlistbox',
  templateUrl: './watchlistbox.component.html',
  styleUrls: ['./watchlistbox.component.css']
})
export class WatchlistboxComponent {
  @Input() movie:any;
  user:any;
  uid:any;
  ufav=[""];
  constructor(public router:Router,public route:ActivatedRoute,private ms:MovieService,private us:UserService,) {
     this.uid=localStorage.getItem("id")
     us.getUsersbyId(this.uid).subscribe({
       next:(data:any)=>{
        this.user=data;
        this.ufav=this.user.watchlist;
      },
       error:()=>this.user={}
     })
     
}
  changeRoute(){
    this.router.navigate(['../details'],{relativeTo:this.route,state:this.movie});
  }
  onRemove(){
    const index = this.ufav.indexOf(this.movie.title)
    if (index > -1) { 
      this.ufav.splice(index, 1); 
    }
    this.us.updateUsers({"watchlist":this.ufav},this.uid).subscribe({
      next:()=>alert(this.movie.title+" is removed from favorites!!"),
      error:()=>alert("Error on removing from favorites...")
    });
    location.reload();
  }
}
