import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { MovieService } from 'src/app/shared/services/movie.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  name="";
  nameS="";
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]> | undefined;
  states:State[] = [
    
  ];
  movies:any;
  ca:any;
  constructor(private ms:MovieService,private cas:CarouselService) {
    cas.getcarousel().subscribe({
      next:(data:any)=>this.ca = data,
      error:()=>this.ca = [],
    })
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
  
    // 
    
    // 
   }
   onSearch(){
    this.nameS = this.name;
   }
   private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
  // ngOnInit(): void {
  //   this.ms.getMovies().subscribe( {
  //     next: (data:any)=>this.movies = data,
  //     error: ()=> this.movies = []
  //    }
  //    )
  // }
}
