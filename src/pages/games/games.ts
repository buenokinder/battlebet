import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import {FixturePage} from "../fixture/fixture";

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
    fixtures: any;
    fixtureid: string = '';

  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider) {

this.getFixtures();

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

}
