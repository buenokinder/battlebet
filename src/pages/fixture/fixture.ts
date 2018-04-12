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
    fixture: any;


  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams) {

      this.getMarkets( this.navParams.get('id'));

  }
    getMarkets(id) {
        this.oddsProvider.getMarkets(id)
            .then(data => {
                this.fixture = data["data"]["name"];
                this.markets = data["data"]["markets"];
                console.log(this.markets);
            });
    }

    pushMarket(id) {
        this.navCtrl.push(MarketPage, {id});
    }

}
