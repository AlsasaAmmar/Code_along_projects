import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  @Output() player = new EventEmitter<string>();
  gamePlaying = false;
  currentPlayer = { name: '', sign: '' };
  playerOne = { name: 'Player One', sign: 'X' };
  playerTwo = { name: 'Player Two', sign: 'O' };
  winner = {};
  spots = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.gamePlaying = true;
    this.currentPlayer = this.playerOne;
    this.winner = '';
    this.spots = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  }

  onSelectedSpot(selectedSpotIndex) {
    const selectedSpot = this.spots[selectedSpotIndex];
    const spotIsFree = selectedSpot !== 'X' && selectedSpot !== 'O';
    if (this.gamePlaying && spotIsFree) {
      this.spots = this.spots.map((spot, i) =>
        i === selectedSpotIndex ? (spot = this.currentPlayer.sign) : spot
      );

      for (let i = 0; i < this.spots.length; i++) {
        const spots = this.spots;
        //checks 0-1-2/3-4-5/6-7-8
        if (i === 0 || i === 3 || i === 6) {
          if (spots[i] === spots[i + 1] && spots[i + 1] === spots[i + 2]) {
            this.onWinning(this.currentPlayer);
          }
        }
        //checks 0-3-6/1-4-7/2-5-8
        if (spots[i] === spots[i + 3] && spots[i + 3] === spots[i + 6]) {
          this.onWinning(this.currentPlayer);
        }
        //checks
        if (spots[0] === spots[4] && spots[4] === spots[8]) {
          this.onWinning(this.currentPlayer);
        }
        if (spots[2] === spots[4] && spots[4] === spots[6]) {
          this.onWinning(this.currentPlayer);
        }
      }
    }

    this.currentPlayer =
      this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }

  onWinning(winner) {
    this.gamePlaying = false;
    this.winner = winner;
    this.currentPlayer = { name: '', sign: '' };
  }
}
