import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {App} from 'ionic-angular';
import {AuthPage} from "../../pages/auth/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
            private User: UserProvider,
           private app: App) {

  }

  logout(): void {
    this.User.logout();
    this.User.cleanDBFollowing();
    this.app.getRootNav().setRoot(AuthPage);
}
}
