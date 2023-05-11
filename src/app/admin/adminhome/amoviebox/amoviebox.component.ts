import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-amoviebox',
  templateUrl: './amoviebox.component.html',
  styleUrls: ['./amoviebox.component.css']
})
export class AmovieboxComponent {
  @Input() movie:any;
@Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter();
  deleteStatus=""
  constructor(private ms:MovieService,private route:ActivatedRoute,private router:Router){}
  changeRoute(){
    this.router.navigate(['edit'],{relativeTo:this.route,state:this.movie});
  }
  onRemove(id:any){
      this.ms.deleteMovies(id).subscribe({
        next:()=>{
          this.ngOnInit.emit();
        },
        error:()=>this.deleteStatus="Failed to delete"
      });
  }
}
