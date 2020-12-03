import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  createFriend(name: string, age: number, hobbies: string[]) {
    return { name, age, hobbies: [...hobbies] };
  }
  friends = [
    this.createFriend('Kafi', 24, ['drinking', 'ping pong']),
    this.createFriend('Kafi', 24, ['reading', 'ping pong']),
    this.createFriend('Ho', 30, ['playing', 'ping pong']),
    this.createFriend('Boo', 26, ['jacking', 'ping pong']),
    this.createFriend('Jo', 33, ['Football', 'ping pong']),
  ];
}
