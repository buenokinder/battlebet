import {IonicModule, Config, Platform} from "ionic-angular";
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Http} from "@angular/http";
import {language_default, languages} from "../config";
import _ from "underscore";
import { IonicStorageModule } from "@ionic/storage";
import { Facebook } from '@ionic-native/facebook';
// External Libs
// Providers
import {ProvidersModule} from "../providers/providers.module";

import {TranslateStaticLoader, TranslateModule, TranslateLoader, TranslateService} from "ng2-translate";
// Config
import {FacebookService} from "ng2-facebook-sdk";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { GamesPage } from '../pages/games/games';
import { FixturePage } from '../pages/fixture/fixture';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OddsProvider } from '../providers/odds/odds';
import {MarketPage} from "../pages/market/market";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
      GamesPage,
      MarketPage,
      FixturePage,
    HomePage,
    TabsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    ProvidersModule,
    IonicStorageModule.forRoot({
      name: '__battlebet',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }) ,
    TranslateModule.forRoot({
      provide   : TranslateLoader,
      useFactory: (createTranslateLoader),
      deps      : [Http]
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
      MarketPage,
      FixturePage,
      GamesPage,
    HomePage,
    TabsPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    FacebookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OddsProvider
  ]
})
export class AppModule {

  constructor(private translate: TranslateService,
    private config: Config,
    private platform: Platform,
) {
this.translateConfig();
setTimeout(() => {
this.androidPermission();
}, 1000);
}


translateConfig() {
// use navigator lang if available
let userLang = navigator.language.indexOf('-') ? navigator.language.split('-')[0] : navigator.language;
let language = _.find(languages, {code: userLang}) ? _.find(languages, {code: userLang}).code : language_default;

console.log('language', userLang, language);

this.translate.addLangs(languages.map(lang => lang.code));

// this language will be used as a fallback when a translation isn't found in the current language
this.translate.setDefaultLang(language_default);

// the lang to use, if the lang isn't available, it will use the current loader to get them
this.translate.use(language);

// set lang back button
//this.translate.get('backButtonText').subscribe((res: string) => this.config.set('Back', res));
this.config.set('backButtonText', '');

}
androidPermission() {
  if (this.platform.is('android') && this.platform.is('cordova')) {

   
      // CAMERA PERMISSION
      // let permissions = window.cordova.plugins.permissions;

      // if (permissions) {
      //     permissions.requestPermission(permissions.CAMERA, (status) => {
      //             if (!status.hasPermission) {
      //                 console.warn('Camera permission is not turned on');
      //             }
      //         },
      //         () => console.warn('Camera permission is not turned on'));
      // }

  }
}
}
