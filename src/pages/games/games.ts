import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import {FixturePage} from "../fixture/fixture";
import { GlobalsProvider } from '../../providers/globals/globals';
import {BetPage} from "../bet/bet";

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
    fixtures: any;
    fixtureid: string = '';
    currentOdd : any;

  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public globalsProvider : GlobalsProvider) {

this.getFixtures();
      this.currentOdd = this.globalsProvider.calculateOdd();
      console.log(this.currentOdd);

  }
    getFixtures() {
        this.oddsProvider.getFixtures()
            .then(data => {
                this.fixtures = data["data"]["fixtures"];
                console.log(this.fixtures);
            });
    }

    pushFixture(id) {
        this.navCtrl.push(FixturePage, { id});
    }
    pushBet() {
        this.navCtrl.push(BetPage);
    }

}
