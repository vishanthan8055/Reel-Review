import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-amoviebox',
  templateUrl: './amoviebox.component.html',
  styleUrls: ['./amoviebox.component.css']
})
export class AmovieboxComponent {
  @Input() movie:any;
  deleteStatus=""
  constructor(private ms:MovieService){}
  onRemove(id:any){
      this.ms.deleteMovies(id).subscribe({
        next:()=>this.deleteStatus = "Successfully Deleted",
        error:()=>this.deleteStatus="Failed to delete"
      });
      location.reload();
  }
}
