import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { GlobalsProvider } from '../../providers/globals/globals';
import { UserBetProvider } from '../../providers/user-bet';


/**
 * Generated class for the BetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bet',
  templateUrl: 'bet.html',
})
export class BetPage {

    selectedselections : any[] = [];
    totalodd : any;

  constructor(public navCtrl: NavController, public navParams : NavParams, public userBetProvider : UserBetProvider, public globalsProvider : GlobalsProvider) {

    this.selectedselections = globalsProvider.selections;
    this.totalodd = this.globalsProvider.calculateOdd();
  }


    makebet(amount)
    {

        this.userBetProvider.betmultiple(amount,this.selectedselections);
    }

}
