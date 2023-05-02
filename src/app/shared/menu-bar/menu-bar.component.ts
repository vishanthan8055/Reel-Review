import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginoutService } from 'src/app/services/loginout.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(private log:LoginoutService,private router:Router) { }
  logout(){
    this.log.logout();
    window.location.reload();
}
}
