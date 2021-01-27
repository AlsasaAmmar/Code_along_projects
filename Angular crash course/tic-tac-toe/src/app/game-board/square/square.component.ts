import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Output() selectedSpot = new EventEmitter<any>();
  @Input() spot;
  @Input() i;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.selectedSpot.emit();
  }
  getClass(i) {
    return {
      a_spot: i === 0,
      b_spot: i === 1,
      c_spot: i === 2,
      d_spot: i === 3,
      e_spot: i === 4,
      f_spot: i === 5,
      g_spot: i === 6,
      h_spot: i === 7,
      i_spot: i === 8,
    };
  }
}
