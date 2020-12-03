import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  friend: {
    name: string;
    age: number;
    hobbies: string[];
  };

  constructor() {}

  ngOnInit(): void {}
  onAddFriend() {
    console.log('hi');
  }
}
