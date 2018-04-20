import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { OddsProvider } from '../../providers/odds/odds';
import { UserBetProvider } from '../../providers/user-bet';
import { GlobalsProvider } from '../../providers/globals/globals';
import {BetPage} from "../bet/bet";
import { AlertController } from 'ionic-angular';
import {GamesPage} from "../games/games";

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {
    selections: any;
    selectedodd: any;
    selectedselection:any;
    selectedselectionname:any;
    fixtureName: any;
    fixtureId: any;
    fixtureGameDate: any;
    marketName: any;
    currentOdd : any;



  constructor(public navCtrl: NavController, public oddsProvider: OddsProvider, public navParams : NavParams, public userBetProvider : UserBetProvider, public globalsProvider : GlobalsProvider,public alertCtrl: AlertController) {

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
      this.selectedselectionname = selection.name;
      this.globalsProvider.pushSelection(selection);
    }

    showAlert(amount) {
        let alert = this.alertCtrl.create({
            title: 'Bet Success!',
            subTitle: 'Bet Made on' + this.selectedselectionname + ' - ' + 'Value :' + amount  + ',  Good Luck!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(GamesPage);
    }

   makebet(selection,amount,odd)
   {

       this.userBetProvider.bet(amount,selection,this.marketName,this.fixtureId,this.fixtureName,this.fixtureGameDate,odd).then(function(){
           this.showAlert(amount);
       });


   }

}
