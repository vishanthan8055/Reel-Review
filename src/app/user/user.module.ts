import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { MovieboxComponent } from './userhome/moviebox/moviebox.component';
import { MaterialModule } from '../material/material.module';
import { DetailsComponent } from './userhome/details/details.component';
import { SearchpPipe } from '../pipes/searchp.pipe';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
    path:"details", 
    component:DetailsComponent
  }  

  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    MovieboxComponent,
    DetailsComponent,
    SearchpPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
