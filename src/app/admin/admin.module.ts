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


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: AdminhomeComponent
    },
    
  ]
}]

@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    AmovieboxComponent,
    SearchaPipe,
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
