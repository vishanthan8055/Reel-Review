import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginoutService } from 'src/app/services/loginout.service';
import { MovieService } from '../services/movie.service';



@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  isUser = true;

  constructor(private log:LoginoutService,private router:Router,private route:ActivatedRoute,private ms:MovieService) {
    // -----------------------------------------
   
    // --------------------------------------
    if(localStorage.getItem("usertype") == "admin"){
      this.isUser = false;
    }
  }
  logout(){
    this.log.logout();
    window.location.reload();
}
navigate(url:string){
    
  if(url=="")
  window.location.reload()
  else
  this.router.navigate([url], {relativeTo:this.route});
}
}
