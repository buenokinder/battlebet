import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import { UserBetProvider } from '../../providers/user-bet';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {
    selections: any;
    selectedodd: any;
    selectedselection:any;
    fixtureName: any;
    fixtureId: any;
    fixtureGameDate: any;
    marketName: any;


  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams, public userBetProvider : UserBetProvider) {

      this.getSelections( this.navParams.get('id'));
      this.fixtureName = (this.navParams.get('fixtureName'));
      this.fixtureId = (this.navParams.get('fixtureId'));
      this.fixtureGameDate = (this.navParams.get('fixtureGameDate'));
      this.marketName = (this.navParams.get('name'));

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

    selectOdd(odd,id){

      this.selectedodd = odd;
      this.selectedselection = id;
    }

   makebet(selection,amount)
   {

       this.userBetProvider.bet(amount,selection,this.marketName,this.fixtureId,this.fixtureName,this.fixtureGameDate);
   }

}
