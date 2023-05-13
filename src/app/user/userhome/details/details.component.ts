import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  state?:any;
  reviews:any;
  ur:any;
  ut:any;
  un:any;
  constructor(private route:ActivatedRoute,private router:Router,private rs:ReviewService) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
    rs.getReviews().subscribe({
      next:(data:any)=>this.reviews = data,
      error:()=>this.reviews=[]
    })
    
    
  }
  getReviews(){
    this.rs.getReviews().subscribe({
      next:(data:any)=>this.reviews = data,
      error:()=>this.reviews=[]
    })
  }
  ngOnInit(): void {
  }
  getPimg(){
    return localStorage.getItem("pimg");
  }
  getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var ds = ""
    var ms = ""
    var yyyy = today.getFullYear();
    if(dd<10){
      ds='0'+dd
    }
    else{
      ds=''+dd
    }
    if(mm<10)
    {
      ms='0'+mm
    }
    else{
      ms=''+mm
    }
    return ds+'/'+ms+'/'+yyyy;

  }
  onSub(){
   
    this.ut = this.state.title;
    this.un = localStorage.getItem("username")
    let obj = {
      "username":this.un,
      "title":this.ut,
      "date": this.getDate(),
      "review":this.ur
    }
    this.rs.postReviews(obj).subscribe({
      next:()=>{
        this.getReviews();
        this.ur = ""
      },
      error:()=>alert("Posting Failed:(")
    })
    // window.location.reload();
  
}
}
