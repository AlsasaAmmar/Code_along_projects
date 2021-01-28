import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  @Output() friendCreated = new EventEmitter<{
    name: string;
    age: number;
    hobbies: string[];
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddFriend(
    name: HTMLInputElement,
    age: HTMLInputElement,
    hobbies: HTMLInputElement
  ) {
    // this.friendCreated.emit({
    //   name: name.value,
    //   age: age.value,
    //   hobbies: [hobbies.value],
    // });
  }
}
