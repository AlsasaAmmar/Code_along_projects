import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() number: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;
  interval: any;
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.counter++;
      this.number.emit(this.counter);
    }, 1000);
  }
  onStop() {
    clearInterval(this.interval);
  }
}
