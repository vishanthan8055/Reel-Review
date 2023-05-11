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
import { CarouselComponent } from './userhome/carousel/carousel.component';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EditpComponent } from './userhome/editp/editp.component';
import { UlangPipe } from '../pipes/ulang.pipe';

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
  } ,
  {
    path:"editp", 
    component:EditpComponent
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
    UlangPipe,
    WatchlistComponent,
    WatchlistboxComponent,
    ReviewBoxComponent,
    RevPipe,
    UforumComponent,
    ContactComponent,
    CarouselComponent,
    EditpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class UserModule { }
