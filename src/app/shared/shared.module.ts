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
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReversePipe } from '../pipes/reverse.pipe';



@NgModule({
  declarations: [
    MenuBarComponent,
    SearchBarComponent,
    ForumComponent,
    ForumboxComponent,
    ChatsComponent,
    CboxComponent,
    EditprofileComponent,
    ReversePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MenuBarComponent,ForumComponent,ChatsComponent,EditprofileComponent]
})
export class SharedModule { }
