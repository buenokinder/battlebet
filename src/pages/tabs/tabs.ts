import { Component } from '@angular/core';
import { GamesPage } from '../games/games';
import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import {TabAccountSettingsPage} from "../tab-account-settings/tab-account-settings";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = GamesPage;

  tabProfile = ProfilePage;
  tabAccount = TabAccountSettingsPage;
  constructor() {

  }
}
