import { Component , OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from "../pages/home/home";
import {AuthPage} from "../pages/auth/auth";

import {PARSE_APP_ID, PARSE_SERVER_URL, PARSE_JAVASCRIPT_ID} from "../config";
import {ParsePushProvider} from "../providers/parse-push";


declare const Parse: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage:any = HomePage;

 
  constructor(platform: Platform,  push: ParsePushProvider, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       // Start Parse User
       let user = Parse.User.current();
       console.log(user);
       if (!user) {
           this.rootPage = AuthPage;
       } else {
           push.init();
           this.rootPage = HomePage;
       }
    });
    
  };

  ngOnInit() {
    Parse.initialize(PARSE_APP_ID,PARSE_JAVASCRIPT_ID);//,PARSE_JAVASCRIPT_ID,PARSE_MASTER_KEY);
    //Parse.JavaScriptKey = PARSE_JAVASCRIPT_ID;
    Parse.serverURL = PARSE_SERVER_URL;
  };
  

}







