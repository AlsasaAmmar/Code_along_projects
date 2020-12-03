import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-names',
  templateUrl: './friends-names.component.html',
  styleUrls: ['./friends-names.component.css'],
})
export class FriendsNamesComponent implements OnInit {
  @Input() friend;
  constructor() {}

  ngOnInit(): void {}
}
