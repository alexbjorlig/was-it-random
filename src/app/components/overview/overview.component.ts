import { Component, OnInit } from '@angular/core';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  players = this.diceSer.players;

  constructor(
    private diceSer: DiceService
  ) {}

  ngOnInit() {
  }

  addNewPlayer() {
    this.diceSer.addNewPlayer();
  }

}
