import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmovieboxComponent } from './adminhome/amoviebox/amoviebox.component';
import { MaterialModule } from '../material/material.module';
import { SearchaPipe } from '../pipes/searcha.pipe';
import { AddmovieComponent } from './adminhome/addmovie/addmovie.component';
import { EditmovieComponent } from './adminhome/editmovie/editmovie.component';
import { UsersComponent } from './adminhome/users/users.component';
import { UserBoxComponent } from './adminhome/users/user-box/user-box.component';
import { EditUserComponent } from './adminhome/users/edit-user/edit-user.component';
import { AforumComponent } from './adminhome/aforum/aforum.component';
import { AcontactComponent } from './adminhome/acontact/acontact.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: AdminhomeComponent
    },
    {
      path: "addmovie",
      component: AddmovieComponent
    },
    {
      path:"edit", 
      component:EditmovieComponent
    },
    {
      path:"users", 
      component:UsersComponent
    } ,
    {
      path:"edituser", 
      component:EditUserComponent
    },
    {
      path:"forum", 
      component:AforumComponent
    },
    {
      path:"contact", 
      component:AcontactComponent
    }
  ]
}]

@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    AmovieboxComponent,
    SearchaPipe,
    AddmovieComponent,
    EditmovieComponent,
    UsersComponent,
    UserBoxComponent,
    EditUserComponent,
    AforumComponent,
    AcontactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
