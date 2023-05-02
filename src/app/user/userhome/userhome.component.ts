import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  movies:any;
  constructor(private ms:MovieService) { }
  ngOnInit(): void {
    this.ms.getMovies().subscribe( {
      next: (data:any)=>this.movies = data,
      error: ()=> this.movies = []
     }
     )
  }
}
