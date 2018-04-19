import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import { UserBetProvider } from '../../providers/user-bet';
import { GlobalsProvider } from '../../providers/globals/globals';
import {BetPage} from "../bet/bet";

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
    currentOdd : any;



  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams, public userBetProvider : UserBetProvider, public globalsProvider : GlobalsProvider) {

      this.getSelections( this.navParams.get('id'));
      this.fixtureName = (this.navParams.get('fixtureName'));
      this.fixtureId = (this.navParams.get('fixtureId'));
      this.fixtureGameDate = (this.navParams.get('fixtureGameDate'));
      this.marketName = (this.navParams.get('name'));
      this.currentOdd = this.globalsProvider.calculateOdd();
      console.log(this.currentOdd);

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
    pushBet() {
        this.navCtrl.push(BetPage);
    }

    selectOdd(selection){

      this.selectedodd = selection.odd;
      this.selectedselection = selection.id;
      this.globalsProvider.pushSelection(selection);
    }

   makebet(selection,amount)
   {

       this.userBetProvider.bet(amount,selection,this.marketName,this.fixtureId,this.fixtureName,this.fixtureGameDate);
   }

}
