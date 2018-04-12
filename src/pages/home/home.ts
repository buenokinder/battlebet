import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {App, ModalController} from 'ionic-angular';
import {AuthPage} from "../../pages/auth/auth";
import {AccountEditModalPage} from "../account-edit-modal/account-edit-modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
            private User: UserProvider,
            private modalCtrl: ModalController,
           private app: App) {

  }

  logout(): void {
    this.User.logout();
    this.User.cleanDBFollowing();
    this.app.getRootNav().setRoot(AuthPage);
}

editModal(): void {
  this.modalCtrl.create(AccountEditModalPage).present();
}
}
