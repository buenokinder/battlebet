import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import { GlobalsProvider } from '../../providers/globals/globals';
import {MarketPage} from "../market/market";
import {BetPage} from "../bet/bet";


@Component({
  selector: 'page-fixture',
  templateUrl: 'fixture.html'
})
export class FixturePage {
    markets: any;
    fixtureId: any;
    fixtureName: any;
    fixtureGameDate: any;
    currentOdd : any;


  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams, public globalsProvider : GlobalsProvider) {

      this.getMarkets( this.navParams.get('id'));
      this.currentOdd = this.globalsProvider.calculateOdd();
      console.log(this.currentOdd);

  }
    getMarkets(id) {
        this.oddsProvider.getMarkets(id)
            .then(data => {
                this.fixtureName = data["data"]["name"];
                this.fixtureId = data["data"]["id"];
                this.fixtureGameDate = data["data"]["startTime"];

                this.markets = data["data"]["markets"];
                console.log(this.markets);
            });
    }
    pushBet() {
        this.navCtrl.push(BetPage);
    }

    pushMarket(id,name,fixtureId,fixtureName,fixtureGameDate) {
        this.navCtrl.push(MarketPage, {id,name,fixtureName,fixtureId,fixtureGameDate});
    }

}
