import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmmarComponent } from './ammar/ammar.component';
import { FriendsNamesComponent } from './friends-names/friends-names.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { OddComponent } from './game/odd/odd.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { EvenComponent } from './game/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmarComponent,
    FriendsNamesComponent,
    AddFriendComponent,
    OddComponent,
    GameControlComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
