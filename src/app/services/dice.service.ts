import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Player {
  playerNumber: number;
  numberOfDices: number;
}

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  players: Player[] = [];

  constructor() {
    this.addNewPlayer();
  }

  addNewPlayer(): void {
    // First get the highest player number
    const playerNumbers: number[] = this.players.map(v => v.playerNumber);
    const highestPlayerNumber: number = Math.max(...playerNumbers);
    const newPlayerNumber = isFinite(highestPlayerNumber) ? highestPlayerNumber + 1 : 1;
    // Add the new player
    this.players.push({playerNumber: newPlayerNumber, numberOfDices: 1});
  }

  addOrRemoveDice(playerNumber: number, change: number): void {
    // First get the player, then update
    const playerIndex: number = this.players.findIndex(v => v.playerNumber === playerNumber);
    if (playerIndex === -1) {
      alert(`could not find playerNumber: ${playerNumber}`);
    }
    this.players[playerIndex].numberOfDices += change;
  }
}
