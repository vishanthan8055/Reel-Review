import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
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
  constructor(private ms:MovieService){
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
        this.ms.postMovies(obj).subscribe({
          next:()=>{
            alert("You Added a Movie");
            this.title="";
            this.language="";
            this.year="";
            this.desc="";
            this.generes='';
            this.casts='';
            this.directors='';
            this.writers='';
            this.imdbr='';
            this.globalr='';
            this.aka='';
            this.imdbu='';
            this.image='';
            this.genere=[];
            location.reload();

            },
            error: ()=>alert("there is a problem on adding the movie")
          }
          )
  }
}
