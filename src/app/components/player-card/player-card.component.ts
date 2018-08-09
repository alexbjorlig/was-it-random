import { Component, OnInit, Input } from '@angular/core';
import { Player, DiceService } from '../../services/dice.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player;

  constructor(private diceSer: DiceService) { }

  ngOnInit() {
  }

  addOrRemoveDice(playerIndex: number, number: number) {
    this.diceSer.addOrRemoveDice(playerIndex, number);
  }

}
