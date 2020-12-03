import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmmarComponent } from './ammar/ammar.component';
import { FriendsNamesComponent } from './friends-names/friends-names.component';
import { AddFriendComponent } from './add-friend/add-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmarComponent,
    FriendsNamesComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
