import { Component } from '@angular/core';
import { LoginoutService } from '../services/loginout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";
  error?:string;
  status:boolean=false;

  rusername:string="";
  rpassword:string="";
  vpassword:string="";
  remail:string="";
  rerror?:string;
  rstatus:boolean=false

  logform:boolean=true;

  constructor(private log:LoginoutService,private route:Router) { }

  ngOnInit(): void {
  }


  toggle(){
    this.logform=this.logform?false:true;
 }
 login():void{
  this.error="";
  if(this.email.length==0 || this.password.length==0)
  this.error="Fill all the fields";
  else{
    this.status=true;
    this.log.login(this.email,this.password).subscribe(
       { next:   (response:any)=>{
           localStorage.setItem("username",response.user.username);
           localStorage.setItem("usertype",response.user.type);
           localStorage.setItem("token",response.accessToken);
           localStorage.setItem("email",response.user.email);
           this.log.username=response.user.username;
           this.log.usertype=response.user.type;
           this.log.token=response.accessToken;
           this.status=true;
           if(response.user.type=="admin")
               this.route.navigate(['admin/home']);
           else
               this.route.navigate(['user/home']);
         },

         error:()=>{
           this.error="Invalid Credentials";
           this.status=false;
         }}
    )
        }
}

register():void{
  alert("Called");
   this.rerror="";
   let emailregex:RegExp=/^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/


   if(this.rusername.length==0 || this.rpassword.length==0 || this.vpassword.length==0 )
   this.rerror="Fill all the fields";

   else if(this.rusername.length<4)
   this.rerror="Username should be atleast 4 charectars long"

   else if(this.rpassword.length<6)
   this.rerror="password should be atleast 6 charectars long"

   else if(this.rpassword!=this.vpassword)
   this.rerror="Username and password should match"
   
   else if(!emailregex.test(this.remail))
   this.rerror="not in email format"

  
   else{
       this.rstatus=true;
     
                this.rstatus=true;
                let obj={username:this.rusername,password:this.rpassword,type:"user",email: this.remail}
                this.log.register(obj).subscribe({
                  next: (result:any)=>{
                       if(result.success == false)
                         alert("User already exists")
                       else{
                       alert("User successfully registered");
                       this.logform=true;
                       this.rstatus=false;
                       }
                   },
                   error: ()=>{
                       alert("There is problem , Please try again or later")
                       this.rstatus=false;
                   }}
                )
            }
        
   }

}