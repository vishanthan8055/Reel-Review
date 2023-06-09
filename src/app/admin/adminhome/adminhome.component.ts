import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie.service';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  name="";
  nameS="";
  selected="All";
  languages=["All","English","Tamil","Japanese","French","Russian"]
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]> | undefined;
  states:State[] = [
    
  ];
  movies:any;
  constructor(private ms:MovieService,private router:Router,private route:ActivatedRoute) {
    this.ms.getMovies().subscribe( {
      next: (data:any)=>{this.movies = data;
        this.movies=data;
          for(let x of this.movies){
            // let flag = x.image;
            // let name = x.title;
            let a:State = {
              flag: "http://localhost/movies/"+x.image,
              name: x.title,
              population: "1m"
            }
            this.states.push(a);
          }
      },
      error: ()=> this.movies = []
     }
     )
     this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  
   }

   ngOnInit(){
    this.ms.getMovies().subscribe( {
      next: (data:any)=>{this.movies = data;
        this.movies=data;
          for(let x of this.movies){
            // let flag = x.image;
            // let name = x.title;
            let a:State = {
              flag: "http://localhost/movies/"+x.image,
              name: x.title,
              population: "1m"
            }
            this.states.push(a);
          }
      },
      error: ()=> this.movies = []
     }
     )
     this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }
   onSearch(){
    this.nameS = this.name;
   }
   private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
  navigate(url:string){
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url], {relativeTo:this.route});
  }
  changeRoute(){
    this.router.navigate(['addmovie'],{relativeTo:this.route});
  }
}
