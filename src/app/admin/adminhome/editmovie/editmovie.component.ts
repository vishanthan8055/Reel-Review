import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent {

  title="";
  language="";
  year="";
  desc="";
  generes='';
  casts='';
  directors='';
  writers='';
  imdbr='';
  globalr='';
  aka='';
  imdbu='';
  image='';
  genere:string[]=[];

state?:any;
  constructor(private route:ActivatedRoute,private router:Router,private ms:MovieService) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
    this.title = this.state.title;
    this.language=this.state.language;
    for(let x of this.state.genere){
      this.generes = this.generes+x+",";
    }
    this.genere=this.state.genere;
    this.desc=this.state.description;
    this.year=this.state.year;
    this.imdbr=this.state.imdb_rating;
    this.casts = this.state.cast;
    this.globalr = this.state.rank;
    this.directors = this.state.directors;
    this.writers = this.state.writers;
    this.aka = this.state.aka;
    this.imdbu = this.state.imdb_url;
    this.image = this.state.image;
  }

  submit(){
   
    let obj={
      title: this.title,
      language:this.language,
      genere:this.generes.split(','),
      description: this.desc,
      year: this.year,
      imdb_rating: this.imdbr,
      rank: this.globalr,
      cast: this.casts,
      directors: this.directors,
      writers: this.writers,
      aka: this.aka,
      imdb_url:this.imdbu,
      image:this.image
    }
    this.ms.editMovies(obj,this.state.id).subscribe({
      next:()=>{
        alert("You Edited a Movie");
        location.reload();
        },
        error: ()=>alert("there is a problem on editing the movie")
      }
      )
      
      

}


}
