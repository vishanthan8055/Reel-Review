import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ForumComponent } from './forum/forum.component';
import { ForumboxComponent } from './forum/forumbox/forumbox.component';
import { ChatsComponent } from './chats/chats.component';
import { CboxComponent } from './chats/cbox/cbox.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    SearchBarComponent,
    ForumComponent,
    ForumboxComponent,
    ChatsComponent,
    CboxComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MenuBarComponent,ForumComponent,ChatsComponent]
})
export class SharedModule { }
