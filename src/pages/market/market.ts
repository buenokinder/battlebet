import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {
    selections: any;
    selectedodd: any;


  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams) {

      this.getSelections( this.navParams.get('id'));

  }
    getSelections(id) {
        this.oddsProvider.getSelections(id)
            .then(data => {
                this.selections = data["data"]["selections"];
                console.log(this.selections);
            });
    }

    pushMarket(id) {
        this.navCtrl.push(MarketPage, { id});
    }

    selectOdd(odd){

      this.selectedodd = odd;
    }

}
