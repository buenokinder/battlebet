import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import {MarketPage} from "../market/market";

@Component({
  selector: 'page-fixture',
  templateUrl: 'fixture.html'
})
export class FixturePage {
    markets: any;
    fixtureId: any;
    fixtureName: any;
    fixtureGameDate: any;


  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams) {

      this.getMarkets( this.navParams.get('id'));

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

    pushMarket(id,name,fixtureId,fixtureName,fixtureGameDate) {
        this.navCtrl.push(MarketPage, {id,name,fixtureName,fixtureId,fixtureGameDate});
    }

}
