import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-amoviebox',
  templateUrl: './amoviebox.component.html',
  styleUrls: ['./amoviebox.component.css']
})
export class AmovieboxComponent {
  @Input() movie:any;
  deleteStatus=""
  constructor(private ms:MovieService,private route:ActivatedRoute,private router:Router){}
  changeRoute(){
    this.router.navigate(['edit'],{relativeTo:this.route,state:this.movie});
  }
  onRemove(id:any){
      this.ms.deleteMovies(id).subscribe({
        next:()=>this.deleteStatus = "Successfully Deleted",
        error:()=>this.deleteStatus="Failed to delete"
      });
      location.reload();
  }
}
