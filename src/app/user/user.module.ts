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
import { WatchlistComponent } from './userhome/watchlist/watchlist.component';
import { WatchlistboxComponent } from './userhome/watchlist/watchlistbox/watchlistbox.component';
import { FavPipe } from '../pipes/fav.pipe';
import { ReviewBoxComponent } from './userhome/details/review-box/review-box.component';
import { RevPipe } from '../pipes/rev.pipe';
import { UforumComponent } from './userhome/uforum/uforum.component';
import { ContactComponent } from './userhome/contact/contact.component';

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
  },
  {
    path:"favs", 
    component:WatchlistComponent
  } ,
  {
    path:"forum", 
    component:UforumComponent
  }  ,
  
  {
    path:"contact", 
    component:ContactComponent
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
    SearchpPipe,
    FavPipe,
    WatchlistComponent,
    WatchlistboxComponent,
    ReviewBoxComponent,
    RevPipe,
    UforumComponent,
    ContactComponent
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
