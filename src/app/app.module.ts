import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
// Components
import { OverviewComponent } from './components/overview/overview.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
// Service
import { DiceService } from './services/dice.service';
// Flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PlayerCardComponent,
  ],
  imports: [
    BrowserModule,
    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    // Flex layout
    FlexLayoutModule
  ],
  providers: [
    DiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
