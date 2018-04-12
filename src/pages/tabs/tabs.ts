import { Component } from '@angular/core';
import {Tabs, Events} from "ionic-angular";
import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import {TabAccountSettingsPage} from "../tab-account-settings/tab-account-settings";


@Component({
  selector   : 'tabs',
  templateUrl: 'tabs.html'
})


export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tabProfile = ProfilePage;
  tabAccount = TabAccountSettingsPage;

  tabActivityBadge: number = 0;

  //@ViewChild('myTabs') tabRef: Tabs;
  constructor(private events: Events,
    
    ) {
      this.events.subscribe('tabAccount', () => setTimeout(() => this.tabRef.select(0), 100));
      this.events.subscribe('clearActivity', () => this.tabActivityBadge = 0);
  }
}
