import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  movies:any;
  user:any;
  uid:any;
  ufav=[];
  constructor(private ms:MovieService,private us:UserService) {
    this.ms.getMovies().subscribe( {
      next: (data:any)=>this.movies = data,
      error: ()=> this.movies = []
     })
     this.uid=localStorage.getItem("id")
     us.getUsersbyId(this.uid).subscribe({
       next:(data:any)=>{
        this.user=data;
        this.ufav=this.user.watchlist;
      },
       error:()=>this.user={}
     })
     
}
ngOnInit(){
  this.ms.getMovies().subscribe( {
    next: (data:any)=>this.movies = data,
    error: ()=> this.movies = []
   })
   this.uid=localStorage.getItem("id")
   this.us.getUsersbyId(this.uid).subscribe({
     next:(data:any)=>{
      this.user=data;
      this.ufav=this.user.watchlist;
    },
     error:()=>this.user={}
   })
}
isEmpty(){
  if(this.ufav.length === 0){
    return true;
  }
  return false;
}
}
