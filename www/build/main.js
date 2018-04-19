webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_edit_modal_account_edit_modal__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, User, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.User = User;
        this.modalCtrl = modalCtrl;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        this.User.logout();
        this.User.cleanDBFollowing();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
    };
    HomePage.prototype.editModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */]).present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="editModal()">{{\'Edit Profile\' | translate}}</ion-item>\n\n    <ion-item (click)="logout()">{{\'Logout\'|translate}}</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParsePushProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParsePushProvider = (function () {
    function ParsePushProvider(platform) {
        this.platform = platform;
        this.cordova = false;
        this.cordova = this.platform.is('cordova') ? true : false;
    }
    ParsePushProvider.prototype.init = function () {
        var _this = this;
        if (this.cordova && ParsePushPlugin) {
            ParsePushPlugin.getInstallationId(function (id) {
                _this._installationId = id;
                console.log("device installationId: " + id);
                _this.subscribeUser().then(function (user) {
                    console.log('User subscribe', user);
                    _this.on('chat', function (chat) {
                        console.log('chat', chat);
                    });
                });
            }, function (error) { return console.log; });
        }
    };
    ParsePushProvider.prototype.getSubscriptions = function () {
        return new Promise(function (resolve, reject) {
            ParsePushPlugin.getSubscriptions(function (subscriptions) {
                console.log(subscriptions);
                resolve(subscriptions);
            }, function (e) {
                console.log('error', e);
                reject(e);
            });
        });
    };
    ParsePushProvider.prototype.subscribeUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.current = Parse.User.current();
            if (ParsePushPlugin && _this.current) {
                ParsePushPlugin.subscribe(_this.current.get('username'), resolve);
            }
            else {
                reject('Not device');
            }
        });
    };
    ParsePushProvider.prototype.on = function (event, callback) {
        if (this.cordova && ParsePushPlugin) {
            return ParsePushPlugin.on(event, callback);
        }
    };
    ParsePushProvider.prototype.subscribe = function (channel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.cordova && ParsePushPlugin) {
                ParsePushPlugin.subscribe(channel, function (resp) {
                    console.log('Subcribe in channel', channel);
                    resolve(resp);
                }, function (err) {
                    console.log('Not Subcribe in channel', channel);
                    reject(err);
                });
            }
        });
    };
    ParsePushProvider.prototype.unsubscribe = function (channel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.cordova && ParsePushPlugin) {
                ParsePushPlugin.unsubscribe(channel, function (resp) {
                    console.log('Unsubcribe in channel', channel);
                    resolve(resp);
                }, function (err) {
                    console.log('Not Unsubcribe in channel', channel);
                    reject(err);
                });
            }
            else {
                reject();
            }
        });
    };
    ParsePushProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], ParsePushProvider);
    return ParsePushProvider;
}());

//# sourceMappingURL=parse-push.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserBetProvider = (function () {
    function UserBetProvider() {
        var _this = this;
        this._fields = [
            'user',
            'amount',
            'result',
            'resultAmount',
            'card',
            'odd'
        ];
        this._ParseObject = Parse.Object.extend('UserBet', {});
        this._fields.map(function (field) {
            Object.defineProperty(_this._ParseObject.prototype, field, {
                get: function () { return this.get(field); },
                set: function (value) { this.set(field, value); }
            });
        });
    }
    UserBetProvider.prototype.betmultiple = function (betamount, selections) {
        var currentUser = Parse.User.current();
        var currentuserId = currentUser.get('id');
        return Parse.Cloud.run('bet', { user: currentuserId, betAmount: betamount, selections: selections });
    };
    UserBetProvider.prototype.bet = function (betamount, selectionId, marketName, fixtureId, fixtureName, fixtureGameDate) {
        var currentUser = Parse.User.current();
        var currentuserId = currentUser.get('id');
        return Parse.Cloud.run('bet', { user: currentuserId, betAmount: betamount, selectionId: selectionId, marketName: marketName, fixtureId: fixtureId, fixtureName: fixtureName, fixtureGameDate: fixtureGameDate });
    };
    UserBetProvider.prototype.getBets = function (status) {
        var currentUser = Parse.User.current();
        currentUser.get('id');
        var ParseQuery = new Parse.Query(this._ParseObject);
        ParseQuery.equalTo("status", status);
        return ParseQuery.find();
    };
    UserBetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserBetProvider);
    return UserBetProvider;
}());

//# sourceMappingURL=user-bet.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AboutPage Page');
    };
    AboutPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n      <ion-title>\n\n          {{\'About\' | translate}}\n\n      </ion-title>\n\n      <ion-buttons start>\n\n          <button ion-button (click)="dismiss()">\n\n              <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAccountSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_password_user_password__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_edit_modal_account_edit_modal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_language_modal_language_modal__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import {ChatChannelProvider} from "../../providers/chat-channel";

var TabAccountSettingsPage = (function () {
    function TabAccountSettingsPage(User, app, modalCtrl, util) {
        this.User = User;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.util = util;
    }
    TabAccountSettingsPage.prototype.aboutPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]).present();
    };
    TabAccountSettingsPage.prototype.modalLanguage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_language_modal_language_modal__["a" /* LanguageModalComponent */]).present();
    };
    TabAccountSettingsPage.prototype.href = function (url) {
        this.util.href(url);
    };
    TabAccountSettingsPage.prototype.changePassword = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__user_password_user_password__["a" /* UserPasswordPage */]).present();
    };
    TabAccountSettingsPage.prototype.editModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */]).present();
    };
    TabAccountSettingsPage.prototype.logout = function () {
        this.User.logout();
        this.User.cleanDBFollowing();
        // this.Gallery.cleanCache()
        // this.ChatChannel.cleanDB();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__["a" /* AuthPage */]);
    };
    TabAccountSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-account-settings',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\tab-account-settings\tab-account-settings.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'Options\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <ion-item-divider>{{\'Invite Friends\' | translate}}</ion-item-divider>\n\n        <ion-item>\n\n            <ion-icon name="logo-facebook" icon-left></ion-icon>\n\n            {{\'Find Facebook Friends\' | translate }}\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="person" icon-left></ion-icon>\n\n            {{\'Find Contact\' | translate }}\n\n        </ion-item>\n\n        <ion-item-divider>{{\'Account\' | translate}}</ion-item-divider>\n\n        <ion-item (click)="editModal()">{{\'Edit Profile\' | translate}}</ion-item>\n\n        <ion-item (click)="changePassword()">{{\'Change Password\' | translate}}</ion-item>\n\n        <ion-item-divider>{{\'Settings\' | translate}}</ion-item-divider>\n\n        <ion-item (click)="modalLanguage()">{{\'Language\'|translate}}</ion-item>\n\n        <ion-item>{{\'Push Notifications\' | translate}}</ion-item>\n\n        <ion-item>{{\'Comments\' | translate}}</ion-item>\n\n        <ion-item>{{\'Upload Quality\' | translate}}</ion-item>\n\n        <ion-item>{{\'Save Original Photos\' | translate }}</ion-item>\n\n        <ion-item-divider>{{\'About\' | translate}}</ion-item-divider>\n\n        <ion-item (click)="href(\'https://photogram.codevibe.io/\')">{{\'Terms of Service\' | translate}}</ion-item>\n\n        <ion-item (click)="aboutPage()">{{\'Open Source Libraries\' | translate}}</ion-item>\n\n        <ion-item (click)="logout()">{{\'Logout\'|translate}}</ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\tab-account-settings\tab-account-settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], TabAccountSettingsPage);
    return TabAccountSettingsPage;
}());

//# sourceMappingURL=tab-account-settings.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseFileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParseFileProvider = (function () {
    function ParseFileProvider() {
        this._filename = 'file.jpg';
    }
    ParseFileProvider.prototype.upload = function (file, ext) {
        this._file = file;
        if (ext) {
            this._filename.replace('.jpg', ext);
        }
        return new Parse.File('file.jpg', file).save();
    };
    ParseFileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParseFileProvider);
    return ParseFileProvider;
}());

//# sourceMappingURL=parse-file.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDataProvider = (function () {
    function UserDataProvider() {
        var _this = this;
        this._fields = [
            'followingsTotal',
            'followersTotal',
            'commentsTotal',
            'galleriesTotal',
            'albumTotal',
            'photo',
            'status',
            'name',
            'username',
            'user',
        ];
        this._ParseObject = Parse.Object.extend('UserData', {});
        this._fields.map(function (field) {
            Object.defineProperty(_this._ParseObject.prototype, field, {
                get: function () { return this.get(field); },
                set: function (value) { this.set(field, value); }
            });
        });
        // This is a GeoPoint Object
        Object.defineProperty(this._ParseObject.prototype, 'location', {
            get: function () { return this.get('location'); },
            set: function (val) {
                this.set('location', new Parse.GeoPoint({
                    latitude: val.latitude,
                    longitude: val.longitude
                }));
            }
        });
    }
    UserDataProvider.prototype.current = function () {
        return Parse.User.current();
    };
    UserDataProvider.prototype.profile = function (username) {
        return Parse.Cloud.run('profile', { username: username });
    };
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonicUtilProvider = (function () {
    function IonicUtilProvider(platform, loadingCtrl, toastCtrl, translateService, alertCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.cordova = false;
        this.maxWidth = 640;
        this.cordova = platform.is('cordova') ? true : false;
        console.log('Cordova', this.cordova);
        platform.ready().then(function () {
            _this._widthPlatform = platform.width() <= _this.maxWidth ? platform.width() : _this.maxWidth;
            _this._heightPlatform = platform.height();
        });
    }
    IonicUtilProvider.parseForm = function (form) {
        var object = new Object();
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](form.value, function (value, key) {
            object[key] = value;
        });
        return object;
    };
    IonicUtilProvider.prototype.isOnline = function () {
        if (this.cordova && navigator.connection) {
            return navigator.connection.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    IonicUtilProvider.prototype.isOffline = function () {
        if (this.cordova && navigator.connection) {
            var networkState = navigator.connection.type;
            return networkState === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    IonicUtilProvider.getRandomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 9999; }
        return Math.floor(Math.random() * (max - min)) + min;
    };
    IonicUtilProvider.prototype.onLoading = function (message, duration) {
        if (message === void 0) { message = ''; }
        if (duration === void 0) { duration = 3000; }
        this._loading = this.loadingCtrl.create({ content: message, duration: duration });
        this._loading.present();
    };
    IonicUtilProvider.prototype.endLoading = function () {
        this._loading.dismiss();
    };
    IonicUtilProvider.prototype.toast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
        });
        toast.present();
    };
    IonicUtilProvider.prototype.href = function (url) {
        // this.iab.create(url, '_blank', 'location=yes');
    };
    IonicUtilProvider.prototype.translate = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.translateService.get(text).subscribe(function (res) { return resolve(res); });
        });
    };
    IonicUtilProvider.getClientHeight = function () {
        var body = document.body, html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        return height;
    };
    IonicUtilProvider.prototype.tryConnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: 'You are OffLine',
                message: 'Try repeat connect?',
                buttons: [
                    {
                        text: 'Retry',
                        handler: function () {
                            //console.log('Disagree clicked');
                            resolve();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                            //console.log('Disagree clicked');
                            reject();
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    IonicUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], IonicUtilProvider);
    return IonicUtilProvider;
}());

//# sourceMappingURL=ionic-util.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_games__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_account_settings_tab_account_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_account_tab_account__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    //@ViewChild('myTabs') tabRef: Tabs;
    function TabsPage(events) {
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__games_games__["a" /* GamesPage */];
        this.tabProfile = __WEBPACK_IMPORTED_MODULE_6__tab_account_tab_account__["a" /* TabAccountPage */];
        this.tabAccount = __WEBPACK_IMPORTED_MODULE_5__tab_account_settings_tab_account_settings__["a" /* TabAccountSettingsPage */];
        this.tabActivityBadge = 0;
        //this.events.subscribe('tabAccount', () => setTimeout(() => this.tabRef.select(0), 100));
        //this.events.subscribe('clearActivity', () => this.tabActivityBadge = 0);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="bottom" color="primary" preloadTabs="true" #myTabs>\n\n  <ion-tab [root]="tabAccount" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Games" tabIcon="ios-football"></ion-tab>\n\n  <ion-tab [root]="tabProfile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixture_fixture__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bet_bet__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamesPage = (function () {
    function GamesPage(navCtrl, oddsProvider, globalsProvider) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.globalsProvider = globalsProvider;
        this.fixtureid = '';
        this.getFixtures();
        this.currentOdd = this.globalsProvider.calculateOdd();
        console.log(this.currentOdd);
    }
    GamesPage.prototype.getFixtures = function () {
        var _this = this;
        this.oddsProvider.getFixtures()
            .then(function (data) {
            _this.fixtures = data["data"]["fixtures"];
            console.log(_this.fixtures);
        });
    };
    GamesPage.prototype.pushFixture = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fixture_fixture__["a" /* FixturePage */], { id: id });
    };
    GamesPage.prototype.pushBet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bet_bet__["a" /* BetPage */]);
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\games\games.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'Games\'| translate}}</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n        <ion-title>Odd: {{currentOdd}}</ion-title>\n\n        <button ion-button (click)="pushBet()">Bet</button>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let fixture of fixtures">\n\n      <ion-avatar item-start>\n\n        <ion-icon name="ios-football" ></ion-icon>\n\n      </ion-avatar>\n\n      <h2>{{fixture.name}}</h2>\n\n      <ion-note item-end>{{fixture.startTime | date:"short"}}</ion-note>\n\n      <button ion-button color="secondary" block (click)="pushFixture(fixture.id)">Bet</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\games\games.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_market__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bet_bet__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FixturePage = (function () {
    function FixturePage(navCtrl, oddsProvider, navParams, globalsProvider) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.navParams = navParams;
        this.globalsProvider = globalsProvider;
        this.getMarkets(this.navParams.get('id'));
        this.currentOdd = this.globalsProvider.calculateOdd();
        console.log(this.currentOdd);
    }
    FixturePage.prototype.getMarkets = function (id) {
        var _this = this;
        this.oddsProvider.getMarkets(id)
            .then(function (data) {
            _this.fixtureName = data["data"]["name"];
            _this.fixtureId = data["data"]["id"];
            _this.fixtureGameDate = data["data"]["startTime"];
            _this.markets = data["data"]["markets"];
            console.log(_this.markets);
        });
    };
    FixturePage.prototype.pushBet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bet_bet__["a" /* BetPage */]);
    };
    FixturePage.prototype.pushMarket = function (id, name, fixtureId, fixtureName, fixtureGameDate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__market_market__["a" /* MarketPage */], { id: id, name: name, fixtureName: fixtureName, fixtureId: fixtureId, fixtureGameDate: fixtureGameDate });
    };
    FixturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fixture',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\fixture\fixture.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{fixture}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-title>Odd: {{currentOdd}}</ion-title>\n\n    <button ion-button (click)="pushBet()">Bet</button>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let market of markets">\n\n      <ion-avatar item-start>\n\n        <ion-icon name="ios-football" ></ion-icon>\n\n      </ion-avatar>\n\n      <h2>{{market.name}}</h2>\n\n      <button ion-button color="secondary" block (click)="pushMarket(market.id,market.name,fixtureId,fixtureName,fixtureGameDate)">Bet</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\fixture\fixture.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], FixturePage);
    return FixturePage;
}());

//# sourceMappingURL=fixture.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_bet__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bet_bet__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketPage = (function () {
    function MarketPage(navCtrl, oddsProvider, navParams, userBetProvider, globalsProvider) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.navParams = navParams;
        this.userBetProvider = userBetProvider;
        this.globalsProvider = globalsProvider;
        this.getSelections(this.navParams.get('id'));
        this.fixtureName = (this.navParams.get('fixtureName'));
        this.fixtureId = (this.navParams.get('fixtureId'));
        this.fixtureGameDate = (this.navParams.get('fixtureGameDate'));
        this.marketName = (this.navParams.get('name'));
        this.currentOdd = this.globalsProvider.calculateOdd();
        console.log(this.currentOdd);
    }
    MarketPage_1 = MarketPage;
    MarketPage.prototype.getSelections = function (id) {
        var _this = this;
        this.oddsProvider.getSelections(id)
            .then(function (data) {
            _this.selections = data["data"]["selections"];
            console.log(_this.selections);
        });
    };
    MarketPage.prototype.pushMarket = function (id) {
        this.navCtrl.push(MarketPage_1, { id: id });
    };
    MarketPage.prototype.pushBet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bet_bet__["a" /* BetPage */]);
    };
    MarketPage.prototype.selectOdd = function (selection) {
        this.selectedodd = selection.odd;
        this.selectedselection = selection.id;
        this.globalsProvider.pushSelection(selection);
    };
    MarketPage.prototype.makebet = function (selection, amount) {
        this.userBetProvider.bet(amount, selection, this.marketName, this.fixtureId, this.fixtureName, this.fixtureGameDate);
    };
    MarketPage = MarketPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\market\market.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{fixtureName}} | {{marketName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n    <ion-toolbar>\n\n        <ion-title>Odd: {{currentOdd}}</ion-title>\n\n        <button ion-button (click)="pushBet()">Bet</button>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n      <ion-list>\n\n        <button *ngFor="let selection of selections" (click)="selectOdd(selection)"  ion-button>{{selection.name}}<br>{{selection.odd}}</button>\n\n      </ion-list>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Odd</ion-label>\n\n            <ion-input *ngIf="selectedodd" disabled="true" placeholder="{{selectedodd}}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n        <ion-label fixed>Value</ion-label>\n\n        <ion-input [(ngModel)]="betamount" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n        <button *ngIf="selectedselection" ion-button color="primary" (click)="makebet(selectedselection,betamount)" block>Bet</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\market\market.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_bet__["a" /* UserBetProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], MarketPage);
    return MarketPage;
    var MarketPage_1;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPasswordPage = (function () {
    function UserPasswordPage(viewCtrl, ionicUtil, provider) {
        this.viewCtrl = viewCtrl;
        this.ionicUtil = ionicUtil;
        this.provider = provider;
        this.submitted = false;
        this.form = {
            password: '',
            changepassword: '',
            confirmpassword: '',
        };
    }
    UserPasswordPage.prototype.save = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.ionicUtil.onLoading();
            this.provider.changePassword(this.form.password).then(function (user) {
                _this.ionicUtil.endLoading();
                _this.dismiss();
            });
        }
    };
    UserPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UserPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-password',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\user-password\user-password.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>Change Password</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <form #rForm="ngForm" (ngSubmit)="save(rForm)" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-icon name="lock" item-left></ion-icon>\n\n        <ion-input [(ngModel)]="form.password" name="password" type="text" #password="ngModel" placeholder="Current Password" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || !submitted" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-icon name="lock" item-left></ion-icon>\n\n        <ion-input [(ngModel)]="form.changepassword" name="changepassword" type="text" #changepassword="ngModel" placeholder="New Password" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="changepassword.valid || !submitted" color="danger" padding-left>\n\n        Change Password is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-icon name="lock" item-left></ion-icon>\n\n        <ion-input [(ngModel)]="form.confirmpassword" name="confirmpassword" type="text" #confirmpassword="ngModel" placeholder="New Password again" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="confirmpassword.valid || !submitted" color="danger" padding-left>\n\n        Confirm Password is required\n\n      </p>\n\n\n\n      <p [hidden]="confirmpassword.valid && form.changepassword != confirmpassword.valid || !submitted" color="danger" padding-left>\n\n        Confirm passwor not equal\n\n      </p>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button block>Save</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\user-password\user-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */]])
    ], UserPasswordPage);
    return UserPasswordPage;
}());

//# sourceMappingURL=user-password.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCaptureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ion_photo_ion_photo_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ion_photo_ion_photo_crop_modal_ion_photo_crop_modal__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageCaptureComponent = (function () {
    function ImageCaptureComponent(photoService, util, modalCtrl, render, events) {
        var _this = this;
        this.photoService = photoService;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.render = render;
        this.events = events;
        this.imageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cordova = false;
        this._eventName = 'imagecapture';
        this.cordova = this.util.cordova;
        this.events.subscribe(this._eventName, function (_imageCroped) { return _this.imageChange.emit(_imageCroped); });
    }
    ImageCaptureComponent.prototype.openCapture = function () {
        var _this = this;
        if (this.cordova) {
            this.photoService.open()
                .then(function (image) { return _this.cropImage(image); })
                .then(function (image) { return _this.imageChange.emit(image); })
                .catch(function (error) { return _this.util.toast(error); });
        }
        else {
            this.render.invokeElementMethod(this.input.nativeElement, 'click');
        }
    };
    ImageCaptureComponent.prototype.cropImage = function (image) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_ion_photo_ion_photo_crop_modal_ion_photo_crop_modal__["a" /* IonPhotoCropModal */], { base64: image, eventName: this._eventName }).present();
    };
    ImageCaptureComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        var image = files[0];
        var reader = new FileReader();
        if (image) {
            reader.onload = function (evt) {
                if (evt) {
                    var image_1 = evt.srcElement['result'];
                    _this.cropImage(image_1);
                }
            };
            reader.readAsDataURL(image);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputFile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ImageCaptureComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ImageCaptureComponent.prototype, "imageChange", void 0);
    ImageCaptureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'image-capture',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\components\image-capture\image-capture.html"*/'<input *ngIf="!cordova"\n\n       #inputFile\n\n       type="file"\n\n       (change)="onChange($event)"\n\n       accept="image/x-png, image/gif, image/jpeg"\n\n       max-size="2048"\n\n       style="display: none;">\n\n<ng-content></ng-content>'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\components\image-capture\image-capture.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__components_ion_photo_ion_photo_service__["a" /* IonPhotoService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ImageCaptureComponent);
    return ImageCaptureComponent;
}());

//# sourceMappingURL=image-capture.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguageModalComponent = (function () {
    function LanguageModalComponent(viewCtrl, util, translate) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.translate = translate;
        this._words = '';
        this._languages = __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.sortBy(__WEBPACK_IMPORTED_MODULE_4__config__["i" /* languages */], 'name');
        this.startTranslate();
    }
    LanguageModalComponent.prototype.doSearch = function () {
        var _this = this;
        var filter = __WEBPACK_IMPORTED_MODULE_4__config__["i" /* languages */].filter(function (item) {
            return item.name.toLowerCase().indexOf(_this._words.toLowerCase()) > -1;
        });
        this._languages = __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.sortBy(filter, 'name');
    };
    LanguageModalComponent.prototype.startTranslate = function () {
        var _this = this;
        // Translate Search Bar Placeholder
        this.util.translate('Search').then(function (res) { return _this._placeholder = res; });
    };
    LanguageModalComponent.prototype.selectLanguage = function (lang) {
        var _this = this;
        this.util.onLoading();
        this.translate.use(lang.code.split('_')[0]);
        setTimeout(function () {
            _this.startTranslate();
            _this.util.endLoading();
            _this.dismiss();
        }, 1000);
    };
    LanguageModalComponent.prototype.doCancel = function () {
        this._words = '';
    };
    LanguageModalComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LanguageModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'language-modal',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\components\language-modal\language-modal.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n        <ion-searchbar [(ngModel)]="_words" (ionInput)="doSearch()" (ionCancel)="doCancel()" [placeholder]="_placeholder">\n\n        </ion-searchbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of _languages" (click)="selectLanguage(item)">\n\n            {{item.name}}\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\components\language-modal\language-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
    ], LanguageModalComponent);
    return LanguageModalComponent;
}());

//# sourceMappingURL=language-modal.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_edit_modal_account_edit_modal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_account_settings_tab_account_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_image_capture_image_capture__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ionic_util__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabAccountPage = (function () {
    function TabAccountPage(userData, events, modalCtrl, ParseFile, User, app, util) {
        var _this = this;
        this.userData = userData;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.ParseFile = ParseFile;
        this.User = User;
        this.app = app;
        this.util = util;
        this.loading = true;
        this.type = 'list';
        this.moreItem = false;
        this.eventName = 'account';
        this.params = {
            limit: 12,
            page: 1,
            privacity: 'public',
            username: ''
        };
        this.user = this.userData.current();
        this.username = this.user.username;
        this.params.username = this.username;
        // More Item
        this.events.subscribe(this.eventName + ':moreItem', function (moreItem) { return _this.moreItem = moreItem[0]; });
        this.loading = true;
        console.log("GOOOO");
        console.log(this.username);
        this.userData.profile(this.username).then(function (profile) {
            _this.profile = profile;
            _this.loading = false;
            _this.onSelectType();
        });
    }
    TabAccountPage.prototype.ionViewDidLoad = function () {
        if (this.user.photo) {
            this.photo = this.user.photo._url;
        }
        else {
            this.photo = 'assets/img/user.png';
        }
    };
    TabAccountPage.prototype.openCapture = function () {
        this.imageElement.openCapture();
    };
    TabAccountPage.prototype.changePhoto = function (photo) {
        var _this = this;
        this.util.onLoading('Uploading image...');
        this.ParseFile.upload({ base64: photo }).then(function (image) {
            _this.User.updatePhoto(image).then(function (user) {
                _this.user = user;
                _this.photo = photo;
                _this.util.endLoading();
                _this.util.toast('Avatar updated');
            }).catch(function (error) {
                _this.util.toast('Error: Not upload image');
            });
        });
    };
    TabAccountPage.prototype.onEditProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */]).present();
    };
    TabAccountPage.prototype.onSelectType = function (type) {
        var _this = this;
        if (type === void 0) { type = 'list'; }
        this.type = type;
        setTimeout(function () { return _this.events.publish(_this.eventName + ':reload', _this.params); }, 1000);
    };
    TabAccountPage.prototype.onPageSettings = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__tab_account_settings_tab_account_settings__["a" /* TabAccountSettingsPage */]);
    };
    TabAccountPage.prototype.doInfinite = function (event) {
        this.params.page++;
        this.events.unsubscribe(this.eventName + ':complete');
        this.events.subscribe(this.eventName + ':complete', function () { return event.complete(); });
        this.sendParams();
    };
    TabAccountPage.prototype.doRefresh = function (event) {
        event.complete();
        this.params.page = 1;
        this.sendParams();
    };
    TabAccountPage.prototype.sendParams = function () {
        this.events.publish(this.eventName + ':params', this.params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('image'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_image_capture_image_capture__["a" /* ImageCaptureComponent */])
    ], TabAccountPage.prototype, "imageElement", void 0);
    TabAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-account',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\tab-account\tab-account.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'Profile\'| translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="onPageSettings()">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="profile-top">\n\n        <ion-row>\n\n            <ion-col width-25>\n\n                    <div class="img-avatar" >\n\n                            <img [src]="photo"/>\n\n                        </div>\n\n                <!-- <image-capture #image (imageChange)="changePhoto($event)" >\n\n                    <div class="img-avatar" (click)="openCapture()">\n\n                        <img [src]="photo"/>\n\n                    </div>\n\n                </image-capture> -->\n\n            </ion-col>\n\n            <ion-col width-75>\n\n                <ion-row>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.galleriesTotal || 0}}</b>\n\n                        <p>{{\'posts\'|translate}}</p>\n\n                    </ion-col>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.followersTotal || 0}}</b>\n\n                        <p>{{\'followers\'|translate}}</p>\n\n                    </ion-col>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.followingsTotal || 0}}</b>\n\n                        <p>{{\'following\'|translate}}</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button (click)="onEditProfile()" ion-button block color="primary" small>\n\n                            {{\'Edit Profile\' | translate }}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <div class="profile-desc">\n\n        <ion-row>\n\n            <ion-col>\n\n                <h3>{{ user.attributes.name }}</h3>\n\n                <p>{{ user.attributes.status }}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <ion-segment [(ngModel)]="type" color="primary">\n\n        <ion-segment-button (ionSelect)="onSelectType(\'list\')" value="list">\n\n            <ion-icon name="ios-list-outline"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="onSelectType(\'grid\')" value="grid">\n\n            <ion-icon name="ios-apps-outline"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="onSelectType(\'album\')" value="album">\n\n            <ion-icon name="ios-image-outline"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <!-- <photo-list [event]="eventName" *ngIf="type==\'list\'"></photo-list>\n\n    <photo-grid [event]="eventName" *ngIf="type==\'grid\'"></photo-grid>\n\n    <album-grid [event]="eventName" *ngIf="type==\'album\'"></album-grid> -->\n\n\n\n    <ion-infinite-scroll *ngIf="moreItem" (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\tab-account\tab-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_parse_file__["a" /* ParseFileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_8__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], TabAccountPage);
    return TabAccountPage;
}());

//# sourceMappingURL=tab-account.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalLibProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_facebook_sdk__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExternalLibProvider = (function () {
    function ExternalLibProvider(fb) {
        this.fb = fb;
        console.log('Hello ExternalLibProvider Provider');
    }
    ExternalLibProvider.prototype.googleMapsLib = function () {
        // Create Google Maps in Browser
        var script = document.createElement('script');
        script.id = 'gmaps';
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places,geometry&key=' + __WEBPACK_IMPORTED_MODULE_2__config__["b" /* GOOGLE_MAPS_WEB */];
        document.body.appendChild(script);
    };
    ExternalLibProvider.prototype.facebookLib = function () {
        var _this = this;
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(pt|en|de)/gi.test(userLang) ? userLang : __WEBPACK_IMPORTED_MODULE_2__config__["h" /* language_default */].split('_')[0];
        var lang = __WEBPACK_IMPORTED_MODULE_2__config__["i" /* languages */].filter(function (item) { return item.code.toLowerCase().indexOf(userLang.toLowerCase()) > -1; });
        // Create Facebook in Browser
        var script = document.createElement('script');
        script.id = 'facebook';
        script.src = 'https://connect.facebook.net/' + lang[0]['code'] + '/sdk.js';
        document.body.appendChild(script);
        var fbParams = {
            appId: __WEBPACK_IMPORTED_MODULE_2__config__["f" /* facebook_appId */],
            xfbml: true,
            version: __WEBPACK_IMPORTED_MODULE_2__config__["g" /* facebook_appVersion */]
        };
        console.log('script', script);
        setTimeout(function () { return _this.fb.init(fbParams); }, 1000);
        //setTimeout(() => Parse.FacebookUtils.init(fbParams), 1000);
    };
    ExternalLibProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_facebook_sdk__["a" /* FacebookService */]])
    ], ExternalLibProvider);
    return ExternalLibProvider;
}());

//# sourceMappingURL=external-lib.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_translate__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_facebook_sdk__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_games_games__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_fixture_fixture__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tab_account_tab_account__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_edit_modal_account_edit_modal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_password_user_password__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_language_modal_language_modal__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tab_account_settings_tab_account_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_odds_odds__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_user_bet__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_market_market__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_bet_bet__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_globals_globals__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// External Libs
// Providers


// Config





















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["d" /* TranslateStaticLoader */](http, './i18n', '.json');
}
var AppModule = (function () {
    function AppModule(translate, config, platform) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.platform = platform;
        this.translateConfig();
        setTimeout(function () {
            _this.androidPermission();
        }, 1000);
    }
    AppModule.prototype.translateConfig = function () {
        // use navigator lang if available
        var userLang = navigator.language.indexOf('-') ? navigator.language.split('-')[0] : navigator.language;
        var language = __WEBPACK_IMPORTED_MODULE_6_underscore___default.a.find(__WEBPACK_IMPORTED_MODULE_5__config__["i" /* languages */], { code: userLang }) ? __WEBPACK_IMPORTED_MODULE_6_underscore___default.a.find(__WEBPACK_IMPORTED_MODULE_5__config__["i" /* languages */], { code: userLang }).code : __WEBPACK_IMPORTED_MODULE_5__config__["h" /* language_default */];
        console.log('language', userLang, language);
        this.translate.addLangs(__WEBPACK_IMPORTED_MODULE_5__config__["i" /* languages */].map(function (lang) { return lang.code; }));
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_5__config__["h" /* language_default */]);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(language);
        // set lang back button
        //this.translate.get('backButtonText').subscribe((res: string) => this.config.set('Back', res));
        this.config.set('backButtonText', '');
    };
    AppModule.prototype.androidPermission = function () {
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
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fixture_fixture__["a" /* FixturePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_bet_bet__["a" /* BetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_password_user_password__["a" /* UserPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_language_modal_language_modal__["a" /* LanguageModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tab_account_settings_tab_account_settings__["a" /* TabAccountSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tab_account_tab_account__["a" /* TabAccountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_providers_module__["a" /* ProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__battlebet',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fixture_fixture__["a" /* FixturePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_bet_bet__["a" /* BetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_password_user_password__["a" /* UserPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_language_modal_language_modal__["a" /* LanguageModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tab_account_settings_tab_account_settings__["a" /* TabAccountSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tab_account_tab_account__["a" /* TabAccountPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_facebook_sdk__["a" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_user_bet__["a" /* UserBetProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_odds_odds__["a" /* OddsProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_globals_globals__["a" /* GlobalsProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_push__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProvider = (function () {
    function UserProvider(parsePush, util, storage) {
        var _this = this;
        this.storage = storage;
        this.data = [];
        this.dataFollowers = [];
        this.dataFollowing = [];
        this._fields = [
            'name',
            'username',
            'status',
            'gender',
            'email',
            'photo',
            'photoThumb',
        ];
        this._ParseObject = Parse.User.extend({});
        this.cordova = false;
        this.ParsePush = parsePush;
        this.cordova = util.cordova;
        this.storage = storage;
        // Start
        this.db = new __WEBPACK_IMPORTED_MODULE_4_pouchdb__('User');
        this.dbFollowing = new __WEBPACK_IMPORTED_MODULE_4_pouchdb__('UserFollowing');
        this.dbFolllowers = new __WEBPACK_IMPORTED_MODULE_4_pouchdb__('UserFollowers');
        this._fields.map(function (field) {
            Object.defineProperty(_this._ParseObject.prototype, field, {
                get: function () { return this.get(field); },
                set: function (value) { this.set(field, value); }
            });
        });
        // This is a GeoPoint Object
        Object.defineProperty(this._ParseObject.prototype, 'location', {
            get: function () { return this.get('location'); },
            set: function (val) {
                this.set('location', new Parse.GeoPoint({
                    latitude: val.latitude,
                    longitude: val.longitude
                }));
            }
        });
    }
    UserProvider.prototype.current = function () {
        return Parse.User.current();
    };
    UserProvider.prototype.fetch = function () {
        return new Promise(function (resolve, reject) {
            if (Parse.User.current()) {
                Parse.User.current().fetch().then(resolve, reject);
            }
            else {
                reject();
            }
        });
    };
    UserProvider.prototype.update = function (form) {
        return Parse.User.current().save(form);
    };
    UserProvider.prototype.updatePhoto = function (parseFile) {
        var user = Parse.User.current();
        user.set('photo', parseFile);
        return user.save();
    };
    UserProvider.prototype.recoverPassword = function (email) {
        return Parse.User.requestPasswordReset(email);
    };
    UserProvider.prototype.getProfile = function (username) {
        return Parse.Cloud.run('profile', { username: username });
    };
    UserProvider.prototype.getProfileCache = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findCache().then(function (data) { return resolve(__WEBPACK_IMPORTED_MODULE_5_underscore___default.a.find(data, { username: username })); });
        });
    };
    UserProvider.prototype.getCache = function (id) {
        return this.db.get(id);
    };
    UserProvider.prototype.findCache = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.allDocs({ include_docs: true }).then(function (data) {
                console.log(data);
                _this.data = [];
                if (data.total_rows) {
                    data.rows.map(function (row) {
                        //let doc = JSON.stringify(row.doc.data);
                        row.doc.createdAt = new Date(row.doc.createdAt);
                        _this.data.push(row.doc);
                    });
                    if (params.username) {
                        var _data = __WEBPACK_IMPORTED_MODULE_5_underscore___default.a.find(_this.data, { username: params.username });
                        console.log('cache username', _data);
                        resolve(_data);
                    }
                    else {
                        console.log('cache', _this.data);
                        resolve(_this.data);
                    }
                }
                else {
                    resolve(_this.data);
                }
            });
        });
    };
    UserProvider.prototype.logout = function () {
        Parse.User.logOut();
    };
    UserProvider.prototype.updateWithFacebookData = function () {
        return Parse.Cloud.run('saveFacebookPicture');
    };
    UserProvider.prototype.facebookSyncProfile = function (fbData) {
        var currentUser = Parse.User.current();
        if (!currentUser.get('facebook') && fbData.id) {
            currentUser.set('facebook', fbData.id);
        }
        if (!currentUser.get('email') && fbData.email) {
            currentUser.set('email', fbData.email);
        }
        if (!currentUser.get('name') && fbData.name) {
            currentUser.set('name', fbData.name);
        }
        if (!currentUser.get('gender') && fbData.gender) {
            currentUser.set('gender', fbData.gender);
        }
        if (!currentUser.get('birthdate') && fbData.birthday) {
            currentUser.set('birthdate', new Date(fbData.birthday));
        }
        return currentUser.save();
    };
    UserProvider.prototype.signUp = function (data) {
        var user = new Parse.User();
        user.set('name', data.name);
        user.set('username', data.username);
        user.set('email', data.email);
        user.set('password', data.password);
        return user.signUp(null);
    };
    UserProvider.prototype.signIn = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Parse.User.logIn(obj.username, obj.password).then(function (currentUser) {
                console.log('logIn', currentUser);
                if (_this.cordova) {
                    // Parse Push
                    _this.ParsePush.init();
                }
                resolve(currentUser);
            }, reject);
        });
    };
    UserProvider.prototype.setStorage = function (user) {
        var obj = {
            id: user.id,
            name: user.get('name'),
            username: user.get('username'),
            email: user.get('email'),
            gender: user.get('gender'),
            photo: user.get('photo'),
            status: user.get('status'),
        };
        console.log(obj);
        this.storage.set('user', obj);
    };
    UserProvider.prototype.getStorage = function () {
        return this.storage.get('user');
    };
    UserProvider.prototype.changePassword = function (password) {
        return Parse.Cloud.run('changePassword', { password: password });
    };
    UserProvider.prototype.destroy = function (data) {
        return Parse.Cloud.run('destroyUser', data);
    };
    UserProvider.prototype.validateEmail = function (input) {
        return Parse.Cloud.run('validateEmail', { email: input });
    };
    UserProvider.prototype.validateUsername = function (input) {
        return Parse.Cloud.run('validateUsername', { username: input });
    };
    UserProvider.prototype.follow = function (params) {
        return Parse.Cloud.run('followUser', params);
    };
    UserProvider.prototype.findByEmail = function (email) {
        return Parse.Cloud.run('findUserByEmail', { email: email });
    };
    UserProvider.prototype.findUserFacebook = function (facebookId) {
        return Parse.Cloud.run('findUserFacebookId', { facebookId: facebookId });
    };
    UserProvider.prototype.list = function (params) {
        return Parse.Cloud.run('listUsers', params);
    };
    UserProvider.prototype.getLikers = function (galleryId) {
        return Parse.Cloud.run('getLikers', { galleryId: galleryId });
    };
    UserProvider.prototype.getFollowers = function (username) {
        return Parse.Cloud.run('getFollowers', { username: username });
    };
    // Following
    UserProvider.prototype.getFollowing = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cleanDBFollowing()
                .then(function () { return Parse.Cloud.run('getFollowing', { username: username }); })
                .then(function (data) { return data.map(function (item) { return _this.dbFollowing.put(item); }); })
                .then(function () { return _this.followingCache(); })
                .then(function (data) {
                resolve(data);
            }, reject);
        });
    };
    UserProvider.prototype.cleanDBFollowing = function () {
        var _this = this;
        this.data = [];
        return new Promise(function (resolve) {
            _this.dbFollowing
                .allDocs({ include_docs: true })
                .then(function (result) { return Promise.all(result.rows.map(function (row) { return _this.dbFollowing.remove(row.doc); })).then(resolve); });
        });
    };
    UserProvider.prototype.followingCache = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.data.length > 0) {
                resolve(_this.data);
            }
            else {
                _this.dbFollowing.allDocs({ include_docs: true }).then(function (data) {
                    if (data.total_rows) {
                        _this.data = data.rows.map(function (row) { return row.doc; });
                    }
                    resolve(_this.data);
                });
            }
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parse_push__["a" /* ParsePushProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_parse_push__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, push, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // Start Parse User
            var user = Parse.User.current();
            console.log(user);
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */];
            }
            else {
                push.init();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
        });
    }
    ;
    MyApp.prototype.ngOnInit = function () {
        Parse.initialize(__WEBPACK_IMPORTED_MODULE_6__config__["c" /* PARSE_APP_ID */], __WEBPACK_IMPORTED_MODULE_6__config__["d" /* PARSE_JAVASCRIPT_ID */]); //,PARSE_JAVASCRIPT_ID,PARSE_MASTER_KEY);
        //Parse.JavaScriptKey = PARSE_JAVASCRIPT_ID;
        Parse.serverURL = __WEBPACK_IMPORTED_MODULE_6__config__["e" /* PARSE_SERVER_URL */];
    };
    ;
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_parse_push__["a" /* ParsePushProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonPhotoService = (function () {
    function IonPhotoService(actionSheetCtrl, platform, cameras, translateService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.cameras = cameras;
        this.translateService = translateService;
        this._cordova = false;
        this._setting = {
            quality: 70,
            width: 1024,
            height: 1024,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true,
            allowRotation: true,
            aspectRatio: 0
        };
        this._cordova = this.platform.is('cordova') ? true : false;
        // Translate
        this.translate('Chose Option').then(function (result) { return _this._translateOption = result; });
        this.translate('Camera').then(function (result) { return _this._translateCamera = result; });
        this.translate('Photo library').then(function (result) { return _this._translateLibrary = result; });
        this.translate('Cancel').then(function (result) { return _this._translateCancel = result; });
        this.translate('Browser not supported').then(function (result) { return _this._translateNotCordova = result; });
    }
    IonPhotoService.prototype.translate = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.translateService.get(text).subscribe(function (res) { return resolve(res); });
        });
    };
    IonPhotoService.prototype.open = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.actionSheetCtrl.create({
                title: _this._translateOption,
                buttons: [
                    {
                        text: _this._translateCamera,
                        icon: 'camera',
                        handler: function () {
                            if (_this._cordova) {
                                _this.camera().then(function (image) { return resolve(image); }).catch(function (error) { return reject(error); });
                            }
                            else {
                                reject(_this._translateNotCordova);
                            }
                        }
                    },
                    {
                        text: _this._translateLibrary,
                        icon: 'images',
                        handler: function () {
                            if (_this._cordova) {
                                _this.photoLibrary().then(function (image) { return resolve(image); }).catch(function (error) { return reject(error); });
                            }
                            else {
                                reject(_this._translateNotCordova);
                            }
                        }
                    },
                    {
                        text: _this._translateCancel
                    }
                ]
            }).present();
        });
    };
    IonPhotoService.prototype.camera = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _options = {
                targetWidth: _this._setting.width,
                targetHeight: _this._setting.height,
                quality: _this._setting.quality,
                sourceType: _this.cameras.PictureSourceType.CAMERA
            };
            _this.cameras.getPicture(_options).then(function (imageData) {
                // imageData is a base64 encoded string
                _this._base64Image = imageData;
                resolve(_this._base64Image);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    IonPhotoService.prototype.photoLibrary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _options = {
                targetWidth: _this._setting.width,
                targetHeight: _this._setting.height,
                quality: _this._setting.quality,
                sourceType: _this.cameras.PictureSourceType.PHOTOLIBRARY,
                maximumImagesCount: 1,
            };
            _this.cameras.getPicture(_options).then(function (imageData) {
                // imageData is a base64 encoded string
                _this._base64Image = imageData;
                resolve(_this._base64Image);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    IonPhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
    ], IonPhotoService);
    return IonPhotoService;
}());

//# sourceMappingURL=ion-photo-service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPhotoCropModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonPhotoCropModal = (function () {
    function IonPhotoCropModal(navParams, viewCtrl, events, platform) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.platform = platform;
        this._eventName = this.navParams.get('eventName');
        this.img = this.navParams.get('base64');
        this.events.subscribe('photocrop:close', function () { return _this.dismiss(); });
        this.platform.registerBackButtonAction(function () { return _this.dismiss(); });
    }
    IonPhotoCropModal.prototype.ionViewDidLoad = function () {
        this.imageLoaded();
    };
    // image Crop Method
    IonPhotoCropModal.prototype.imageLoaded = function () {
        var image = document.getElementById('image');
        this.cropper = new Cropper(image, {
            aspectRatio: 1 / 1,
            dragMode: 'move',
            autoCropArea: 1,
            viewMode: 1,
            restore: true,
            guides: true,
            center: true,
            highlight: false,
            cropBoxMovable: false,
            cropBoxResizable: false,
            toggleDragModeOnDblclick: false,
            responsive: true,
        });
    };
    IonPhotoCropModal.prototype.crop = function () {
        var image = this.cropper.getCroppedCanvas().toDataURL('image/jpeg');
        this.events.publish(this._eventName, image);
        this.dismiss();
    };
    IonPhotoCropModal.prototype.rotate = function (value) {
        this.cropper.rotate(value);
    };
    IonPhotoCropModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    IonPhotoCropModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-photo-crop-modal',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\components\ion-photo\ion-photo-crop-modal\ion-photo-crop-modal.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                {{\'Cancel\' | translate}}\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>{{\'Crop Image\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img [src]="img" id="image"/>\n\n\n\n    <!--Rotate-->\n\n    <ion-fab left bottom>\n\n        <button color="dark" ion-fab mini (click)="rotate(-90)">\n\n            <ion-icon class="invert" name="refresh"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n\n\n    <!-- Crop-->\n\n    <ion-fab center bottom>\n\n        <button color="primary" ion-fab (click)="crop()">\n\n            <ion-icon name="crop"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n\n\n    <!-- Rotate-->\n\n    <ion-fab right bottom>\n\n        <button color="dark" ion-fab mini (click)="rotate(90)">\n\n            <ion-icon name="refresh"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\components\ion-photo\ion-photo-crop-modal\ion-photo-crop-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], IonPhotoCropModal);
    return IonPhotoCropModal;
}());

//# sourceMappingURL=ion-photo-crop-modal.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sharedProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parse_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parse_push__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__external_lib__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Providers








var sharedProviders = [
    __WEBPACK_IMPORTED_MODULE_2__ionic_util__["a" /* IonicUtilProvider */],
    __WEBPACK_IMPORTED_MODULE_9__external_lib__["a" /* ExternalLibProvider */],
    __WEBPACK_IMPORTED_MODULE_3__logging__["a" /* LoggingProvider */],
    __WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthProvider */],
    __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserProvider */],
    __WEBPACK_IMPORTED_MODULE_8__user_data__["a" /* UserDataProvider */],
    __WEBPACK_IMPORTED_MODULE_6__parse_file__["a" /* ParseFileProvider */],
    __WEBPACK_IMPORTED_MODULE_7__parse_push__["a" /* ParsePushProvider */],
];
var ProvidersModule = (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [],
            declarations: [],
            providers: [sharedProviders]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());

//# sourceMappingURL=providers.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["VERBOSE"] = 0] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
var LoggingProvider = (function () {
    function LoggingProvider() {
        this.logLevel = LogLevel.VERBOSE;
    }
    LoggingProvider.prototype.log = function (msg, level) {
        if (level === void 0) { level = LogLevel.VERBOSE; }
        if (console && console.log && this.logLevel >= level) {
            console.log("[" + LogLevel[level] + "] {" + (new Date().toLocaleTimeString()) + "} " + msg);
        }
    };
    LoggingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoggingProvider);
    return LoggingProvider;
}());

//# sourceMappingURL=logging.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthProvider = (function () {
    function AuthProvider() {
        this._mSessionToken = Parse.User.current();
        this.current = Parse.User.current();
    }
    AuthProvider.prototype.recover = function (email) {
        return Parse.User.requestPasswordReset(email);
    };
    AuthProvider.prototype.login = function (obj) {
        return Parse.User.logIn(obj.username, obj.password);
    };
    AuthProvider.prototype.logout = function () {
        return Parse.User.logOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_edit_modal_account_edit_modal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(User, events, userData, modalCtrl, util) {
        var _this = this;
        this.User = User;
        this.events = events;
        this.userData = userData;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.loading = true;
        this.type = 'list';
        this.moreItem = true;
        this.profile = {
            id: '',
            name: '',
            username: '',
            photo: null,
            status: '',
            galleriesTotal: 0,
            followersTotal: 0,
            followingsTotal: 0,
        };
        this.params = {
            limit: 12,
            page: 1,
            privacity: 'public',
            username: null
        };
        this.user = this.userData.current();
        this.username = this.user.username;
        this.params.username = this.username;
        console.log('Open Profile', this.username);
        this.loading = true;
        this.User.getProfileCache(this.username).then(function (profile) {
            if (profile) {
                _this.profile = profile;
                _this.profile.loading = false;
            }
            else {
                _this.loadProfile();
            }
            _this.onSelectType();
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
    };
    ProfilePage.prototype.loadProfile = function () {
        var _this = this;
        this.User.getProfile(this.username).then(function (profile) {
            _this.profile = profile;
            _this.profile.loading = false;
            _this.loading = false;
        }).catch(this.util.toast);
    };
    ProfilePage.prototype.onEditProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__account_edit_modal_account_edit_modal__["a" /* AccountEditModalPage */]).present();
    };
    ProfilePage.prototype.onSelectType = function (type) {
        var _this = this;
        if (type === void 0) { type = 'list'; }
        this.type = type;
        setTimeout(function () { return _this.events.publish(_this.eventName + ':reload', _this.params); }, 500);
    };
    ProfilePage.prototype.follow = function (user) {
        console.log('user', user);
        user.loading = true;
        this.User.follow({ userId: user.id }).then(function (resp) {
            console.log('Follow result', resp);
            user.isFollow = (resp === 'follow') ? true : false;
            if (resp == 'follow') {
                user.followersTotal += 1;
            }
            if (resp == 'unfollow') {
                user.followersTotal -= 1;
            }
            user.loading = false;
        });
    };
    ProfilePage.prototype.doInfinite = function (event) {
        this.params.page++;
        this.events.unsubscribe(this.eventName + ':complete');
        this.events.subscribe(this.eventName + ':complete', function () { return event.complete(); });
        this.sendParams();
    };
    ProfilePage.prototype.doRefresh = function (event) {
        if (event) {
            event.complete();
        }
        this.params.page = 1;
        this.events.publish(this.eventName + ':reload', this.params);
    };
    ProfilePage.prototype.sendParams = function () {
        console.log('sendParams', this.params);
        this.events.publish(this.eventName + ':params', this.params);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'Profile\'| translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div class="profile-top">\n\n        <ion-row>\n\n            <ion-col width-25>\n\n                <div class="img-avatar">\n\n                    <img *ngIf="profile.photo" [src]="profile.photo._url"/>\n\n                    <img *ngIf="!profile.photo" src="assets/img/user.png"/>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col width-75>\n\n                <ion-row>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.galleriesTotal || 0}}</b>\n\n                        <p>{{\'posts\' | translate }}</p>\n\n                    </ion-col>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.followersTotal || 0}}</b>\n\n                        <p>{{\'followers\' | translate}}</p>\n\n                    </ion-col>\n\n                    <ion-col class="text-center">\n\n                        <ion-spinner *ngIf="loading"></ion-spinner>\n\n                        <b *ngIf="!loading">{{ profile.followingsTotal || 0}}</b>\n\n                        <p>{{\'following\' | translate }}</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <div *ngIf="loading" class="text-center">\n\n                            <ion-spinner></ion-spinner>\n\n                        </div>\n\n                        <div *ngIf="!loading" (click)="follow(profile)">\n\n                            <button *ngIf="profile.isFollow" ion-button block color="primary" small>\n\n                                {{ \'Unfollow\' | translate }}\n\n                            </button>\n\n                            <button *ngIf="!profile.isFollow" outline ion-button block color="primary" small>\n\n                                {{ \'Follow\' | translate }}\n\n                            </button>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <div class="profile-desc">\n\n        <ion-row>\n\n            <ion-col>\n\n                <h3>{{ profile.name }}</h3>\n\n                <p>{{ profile.status }}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <ion-segment [(ngModel)]="type" color="primary">\n\n        <ion-segment-button (ionSelect)="onSelectType(\'list\')" value="list">\n\n            <ion-icon name="ios-list-outline"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="onSelectType(\'grid\')" value="grid">\n\n            <ion-icon name="ios-apps-outline"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="onSelectType(\'album\')" value="album">\n\n            <ion-icon name="ios-image-outline"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <!-- <div *ngIf="eventName">\n\n        <photo-list [event]="eventName" *ngIf="type==\'list\'"></photo-list>\n\n        <photo-grid [event]="eventName" *ngIf="type==\'grid\'"></photo-grid>\n\n        <album-grid [event]="eventName" *ngIf="type==\'album\'"></album-grid>\n\n    </div> -->\n\n\n\n    <ion-infinite-scroll *ngIf="moreItem" (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalsProvider = (function () {
    function GlobalsProvider(http) {
        this.http = http;
        this.selections = [];
        console.log('Hello GlobalsProvider Provider');
    }
    GlobalsProvider.prototype.calculateOdd = function () {
        return this.selections.reduce(function (sum, item) { return sum * item.odd; }, 1);
    };
    GlobalsProvider.prototype.pushSelection = function (selection) {
        this.selections.push(selection);
    };
    GlobalsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalsProvider);
    return GlobalsProvider;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_parse_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_image_capture_image_capture__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountEditModalPage = (function () {
    function AccountEditModalPage(viewCtrl, ionic, User, events, util, ParseFile, formBuilder) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.ionic = ionic;
        this.User = User;
        this.events = events;
        this.util = util;
        this.ParseFile = ParseFile;
        this.formBuilder = formBuilder;
        this._eventName = 'photoprofile';
        this._user = User.current().attributes;
        if (this._user.photo) {
            this.photo = this._user.photo._url;
        }
        // Change Photo user
        events.subscribe(this._eventName, function (imageCroped) {
            _this.util.onLoading();
            _this.ParseFile.upload({ base64: imageCroped[0] }).then(function (image) {
                _this.User.updatePhoto(image).then(function (user) {
                    console.log(user);
                    _this.photo = imageCroped[0];
                    _this.util.endLoading();
                });
            });
            _this.events.publish('photocrop:close');
        });
    }
    AccountEditModalPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        // Validate user registration form
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            status: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            website: [''],
            gender: [''],
            birthday: [''],
            phone: [''],
        });
        __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](this._user, function (value, key) {
            if (_this.form.controls[key]) {
                _this.form.controls[key].setValue(value);
            }
        });
    };
    AccountEditModalPage.prototype.changePhoto = function (photo) {
        var _this = this;
        this.util.onLoading('Uploading image...');
        this.ParseFile.upload({ base64: photo }).then(function (image) {
            _this.User.updatePhoto(image).then(function (user) {
                _this._user = user;
                _this.photo = photo;
                _this.util.endLoading();
                _this.util.toast('Avatar updated');
            }).catch(function (error) {
                _this.util.toast('Error: Not upload image');
            });
        });
    };
    AccountEditModalPage.prototype.openCapture = function () {
        this.imageElement.openCapture();
    };
    AccountEditModalPage.prototype.submitProfile = function (rForm) {
        var _this = this;
        if (rForm.valid) {
            this.ionic.onLoading();
            this.User.update(this.form.value).then(function (result) {
                console.log(result);
                _this.ionic.endLoading();
                _this.dismiss();
            }).catch(function (error) {
                console.log(error);
                _this.dismiss();
                _this.ionic.endLoading();
            });
        }
    };
    AccountEditModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('image'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_image_capture_image_capture__["a" /* ImageCaptureComponent */])
    ], AccountEditModalPage.prototype, "imageElement", void 0);
    AccountEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-edit-modal',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\account-edit-modal\account-edit-modal.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n        <ion-title>\n\n            {{\'Profile\' | translate}}\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form [formGroup]="form" #rForm="ngForm" (ngSubmit)="submitProfile(rForm)">\n\n        <div class="item-avatar" (click)="openCapture()">\n\n            <!-- <image-capture #image (imageChange)="changePhoto($event)">\n\n                <ion-avatar>\n\n                    <img *ngIf="photo" [src]="photo">\n\n                    <img *ngIf="!photo" src="assets/img/user.png">\n\n                </ion-avatar>\n\n            </image-capture> -->\n\n            <p>{{\'Change Profile Photo\' | translate}}</p>\n\n        </div>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="calendar" item-left></ion-icon>\n\n                <ion-input formControlName="name" type="text" placeholder="{{\'Name\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="form-error-list"\n\n                      *ngIf="!form.controls.name.pristine && !form.controls.name.valid">\n\n                <p class="form-error" item-right\n\n                   *ngIf="!form.controls.name.pristine && form.controls.name.hasError(\'required\')">\n\n                    {{\'This is a required field.\' | translate}}\n\n                </p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="person" item-left></ion-icon>\n\n                <ion-input formControlName="username" type="text" placeholder="{{\'Username\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="form-error-list"\n\n                      *ngIf="!form.controls.username.pristine && !form.controls.username.valid">\n\n                <p class="form-error" item-right\n\n                   *ngIf="!form.controls.username.pristine && form.controls.username.hasError(\'required\')">\n\n                    {{\'This is a required field.\' | translate}}\n\n                </p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="compass" item-left></ion-icon>\n\n                <ion-input formControlName="website" type="text" placeholder="{{\'Website\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="quote" item-left></ion-icon>\n\n                <ion-input formControlName="status" type="text" placeholder="{{\'Status\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item-divider>\n\n                {{\'PRIVATE INFORMATION\' | translate}}\n\n            </ion-item-divider>\n\n            <ion-item>\n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <ion-input formControlName="email" type="text" placeholder="{{\'Email\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="form-error-list"\n\n                      *ngIf="!form.controls.email.pristine && !form.controls.email.valid">\n\n                <p class="form-error" item-right\n\n                   *ngIf="!form.controls.email.pristine && form.controls.email.hasError(\'required\')">\n\n                    {{\'This is a required field.\' | translate}}\n\n                </p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="calendar" item-left></ion-icon>\n\n                <ion-datetime formcontrolname="birthday"\n\n                              displayFormat="MM/DD/YYYY"\n\n                              placeholder="MM/DD/YYYY"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="phone-portrait" item-left></ion-icon>\n\n                <ion-input formControlName="phone" type="text" placeholder="{{\'Phone\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="phone-portrait" item-left></ion-icon>\n\n                <ion-select formControlName="gender">\n\n                    <ion-option value="">{{\'Not\' | translate}}\'</ion-option>\n\n                    <ion-option value="male">{{\'Male\' | translate}}</ion-option>\n\n                    <ion-option value="female">{{\'Female\' | translate }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <div padding>\n\n            <button ion-button block>{{\'Submit\' | translate}}</button>\n\n        </div>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\account-edit-modal\account-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_parse_file__["a" /* ParseFileProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], AccountEditModalPage);
    return AccountEditModalPage;
}());

//# sourceMappingURL=account-edit-modal.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PARSE_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PARSE_JAVASCRIPT_ID; });
/* unused harmony export PARSE_MASTER_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PARSE_SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_MAPS_WEB; });
/* unused harmony export GOOGLE_ANALYTICS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return facebook_appId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return facebook_appVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return language_default; });
// AppName
var APP_NAME = 'battlebet';
// Parse
var PARSE_APP_ID = '8OUE80mlqO62r3cOyzGmFusrfQGBlAFKwUNFoziN';
var PARSE_JAVASCRIPT_ID = '91UxV8Zzrlzcuh91YRBif96sVZSNg56R1uXwjAzh';
var PARSE_MASTER_KEY = 'hP4oLvSYXRvvf0pq9Hp38Y4kzgQf54g2KQ8VlII7';
var PARSE_SERVER_URL = 'https://parseapi.back4app.com/';
// Google Maps
var GOOGLE_MAPS_WEB = 'AIzaSyCsexTjGbyCsGzyARWgU3vH9-09BEl3SQo';
// Google Analytics
var GOOGLE_ANALYTICS = '';
// Facebook
var facebook_appId = '1429423624023316';
var facebook_appVersion = 'v2.8';
// Languages
var languages = [
    {
        name: 'English',
        code: 'en',
        flag: 'en'
    },
    {
        name: 'Portugues',
        code: 'pt',
        flag: 'pt'
    },
    {
        name: 'German',
        code: 'de',
        flag: 'de'
    },
    {
        name: 'French',
        code: 'fr',
        flag: 'fr'
    },
    {
        name: 'Greek',
        code: 'el',
        flag: 'el'
    },
    {
        name: 'Spanish',
        code: 'es',
        flag: 'es'
    },
    {
        name: 'Japanese',
        code: 'ja',
        flag: 'ja'
    },
    {
        name: 'Chinese',
        code: 'zh',
        flag: 'zh'
    },
    {
        name: 'Russian',
        code: 'ru',
        flag: 'ru'
    },
    {
        name: 'Bengali (Bangla)',
        code: 'bn',
        flag: 'bn'
    },
    {
        name: 'Turkish',
        code: 'tr',
        flag: 'tr'
    },
];
var language_default = 'pt';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_external_lib__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthPage = (function () {
    function AuthPage(navCtrl, provider, alertCtrl, util, fb, formBuilder, app, lib) {
        // Google Analytics
        var _this = this;
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.util = util;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.app = app;
        this.lib = lib;
        this.authType = 'login';
        this.appName = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* APP_NAME */];
        this.facebookInitialised = false;
        this.alertTranslate = {};
        this.cordova = false;
        this.inputPasswordType = 'password';
        this.inputPasswordIcon = 'eye-off';
        this.inputPasswordShow = false;
        // Define Facebook Browser and Native
        this.facebookNative = this.facebook;
        // this.facebookNative = Facebook;
        this.cordova = this.util.cordova;
        if (!this.cordova) {
            this.loadFacebook();
            this.facebook = this.fb;
        }
        else {
            this.facebook = this.facebookNative;
        }
        // Translate Search Bar Placeholder
        this.util.translate('Enter your email so we can send you a link to reset your password').then(function (res) { _this.alertTranslate.message = res; });
        this.util.translate('Open your email and also check the spam box').then(function (res) { _this.alertTranslate.emailRecoverySend = res; });
        this.util.translate('Email is required').then(function (res) { _this.alertTranslate.emailRequired = res; });
        this.util.translate('Recovery your password').then(function (res) { _this.alertTranslate.title = res; });
        this.util.translate('Email').then(function (res) { _this.alertTranslate.email = res; });
        this.util.translate('Cancel').then(function (res) { _this.alertTranslate.cancel = res; });
        this.util.translate('Submit').then(function (res) { _this.alertTranslate.submit = res; });
    }
    AuthPage.prototype.initFacebook = function () {
        console.log('Facebook Ok');
    };
    AuthPage.prototype.loadFacebook = function () {
        this.addConnectivityListeners();
        if (typeof FB == 'undefined') {
            console.log('Facebook JavaScript needs to be loaded.');
            this.disableFacebook();
            if (this.util.isOnline()) {
                console.log('online, loading facebook');
                this.lib.facebookLib();
            }
        }
        else {
            if (this.util.isOnline()) {
                console.log('showing facebook');
                this.initFacebook();
                this.enableFacebook();
            }
            else {
                console.log('disabling facebook');
                this.disableFacebook();
            }
        }
    };
    AuthPage.prototype.disableFacebook = function () {
        console.log('disable facebook');
    };
    AuthPage.prototype.enableFacebook = function () {
        console.log('enable facebook');
    };
    AuthPage.prototype.addConnectivityListeners = function () {
        var _this = this;
        var onOnline = function () {
            setTimeout(function () {
                if (typeof FB == 'undefined') {
                    _this.lib.facebookLib();
                }
                else {
                    if (!_this.facebookInitialised) {
                        _this.initFacebook();
                    }
                    _this.enableFacebook();
                }
            }, 2000);
        };
        var onOffline = function () {
            _this.disableFacebook();
        };
        document.addEventListener('online', onOnline, false);
        document.addEventListener('offline', onOffline, false);
    };
    AuthPage.prototype.ionViewWillLoad = function () {
        this.formLogin = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)])],
        });
        // Validate user registration form
        this.formSignup = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            passwordConfirmation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    };
    AuthPage.prototype.toggleInputPassword = function () {
        this.inputPasswordShow = !this.inputPasswordShow;
        this.inputPasswordType = this.inputPasswordShow ? 'text' : 'password';
        this.inputPasswordIcon = this.inputPasswordShow ? 'eye' : 'eye-off';
    };
    AuthPage.prototype.login = function (form) {
        var _this = this;
        if (form.valid) {
            this.util.onLoading();
            this.provider.signIn(this.formLogin.value).then(function (user) {
                console.log(user);
                console.log(_this.provider.current());
                _this.util.endLoading();
                _this.onPageTabs();
            }).catch(function (error) {
                console.log(error);
                _this.util.endLoading();
                _this.util.toast(error.message);
            });
        }
    };
    AuthPage.prototype.validPassword = function (password, confirm) {
        return (password == confirm) ? true : false;
    };
    AuthPage.prototype.createUser = function (form) {
        var _this = this;
        var newForm = this.formSignup.value;
        if (this.validPassword(newForm.password, newForm.passwordConfirmation)) {
            this.util.onLoading();
            delete newForm['passwordConfirmation'];
            this.provider.signUp(newForm).then(function (user) {
                _this.provider.current = user;
                _this.util.endLoading();
                _this.onPageTabs();
            }).catch(function (error) {
                _this.util.endLoading();
                _this.util.toast(error.message);
            });
        }
        else {
            this.util.toast('Password not confirm');
        }
    };
    AuthPage.prototype.onPageTabs = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    AuthPage.prototype.loginFacebook = function () {
        // new LoginOptions;
        var _this = this;
        // this.fb.login()
        // .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
        // .catch(e => console.log('Error logging into Facebook', e));
        this.util.onLoading();
        this.facebook.getLoginStatus().then(function (response) {
            console.log('getLoginStatus', response);
            if (response.status === 'connected') {
                console.log(1);
                _this.processFacebookLogin(response);
            }
            else {
                console.log(2);
                _this.facebook.login(['public_profile']).then(function (authData) {
                    console.log('facebook login', authData);
                    _this.processFacebookLogin(authData);
                }).catch(function (error) {
                    console.log(error);
                    _this.util.endLoading();
                    _this.util.toast(error.message);
                });
            }
        }).catch(function (error) {
            console.log(error);
            _this.util.endLoading();
            _this.util.toast(error.message);
        });
    };
    AuthPage.prototype.processFacebookLogin = function (authData) {
        var _this = this;
        this.facebook.api('/me?fields=id,name,birthday,last_name,first_name,email,gender', ['public_profile'])
            .then(function (fbData) {
            console.log('fbData', fbData);
            var facebookAuthData = {
                id: authData['authResponse']['userID'],
                access_token: authData['authResponse']['accessToken'],
                expiration_date: (new Date().getTime() + 1000).toString()
            };
            _this.util.onLoading('Updating Facebook Profile');
            Parse.FacebookUtils.logIn(facebookAuthData, {
                success: function (user) {
                    if (!user.existed()) {
                        // New user
                        console.warn('UserProvider signed up and logged in through Facebook!', user);
                        _this.provider.facebookSyncProfile(fbData)
                            .then(_this.provider.updateWithFacebookData())
                            .then(function (result) {
                            _this.util.endLoading();
                            _this.onPageTabs();
                        });
                    }
                    else {
                        // Old UserProvider
                        console.info('UserProvider logged in through Facebook!', user);
                        _this.onPageTabs();
                        _this.provider.facebookSyncProfile(fbData)
                            .then(_this.provider.updateWithFacebookData())
                            .then(function (result) {
                            _this.util.endLoading();
                            _this.onPageTabs();
                        });
                    }
                },
                error: function (user, error) {
                    console.error('UserProvider cancelled the Facebook login or did not fully authorize.', user, error);
                    _this.util.endLoading();
                    _this.util.toast('UserProvider cancelled the Facebook login or did not fully authorize');
                }
            });
        });
    };
    AuthPage.prototype.resetPassword = function () {
        var _this = this;
        this.alertCtrl.create({
            title: this.alertTranslate.title,
            message: this.alertTranslate.message,
            inputs: [
                {
                    placeholder: this.alertTranslate.email,
                    name: 'email',
                    type: 'email'
                }
            ],
            buttons: [
                {
                    text: this.alertTranslate.cancel,
                    role: 'cancel'
                },
                {
                    text: this.alertTranslate.submit,
                    handler: function (data) {
                        if (data.email) {
                            _this.util.onLoading();
                            _this.provider.recoverPassword(data.email).then(function (result) {
                                console.log(result);
                                setTimeout(function () {
                                    _this.util.endLoading();
                                    _this.util.toast(_this.alertTranslate.emailRecoverySend);
                                }, 500);
                                return false;
                            }).catch(function (error) {
                                _this.util.toast('Server error');
                                _this.util.endLoading();
                            });
                        }
                        else {
                            _this.util.toast(_this.alertTranslate.emailRequired);
                        }
                    }
                }
            ]
        }).present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\auth\auth.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{appName}}</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar color="primary">\n\n        <ion-segment [(ngModel)]="authType" color="white">\n\n            <ion-segment-button value="login" style="color: white!important;" >{{\'Login\' | translate}}</ion-segment-button>\n\n            <ion-segment-button value="signup" style="color: white!important;" >{{\'Signup\' | translate}}</ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div [ngSwitch]="authType">\n\n        <form *ngSwitchCase="\'login\'" [formGroup]="formLogin" #rFormLogin="ngForm" (ngSubmit)="login(rFormLogin)">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Username\' | translate}}</ion-label>\n\n                    <ion-input type="text" formControlName="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formLogin.controls.username.pristine && !formLogin.controls.username.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.username.pristine && formLogin.controls.username.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.username.pristine && formLogin.controls.username?.errors?.minlength">\n\n                        {{\'Password must have more than 4 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Password\'|translate}}</ion-label>\n\n                    <ion-input [type]="inputPasswordType" formControlName="password"></ion-input>\n\n                    <a ion-button clear (click)="toggleInputPassword()" item-right>\n\n                        <ion-icon [name]="inputPasswordIcon"  ></ion-icon>\n\n                    </a>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formLogin.controls.password.pristine && !formLogin.controls.password.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.password.pristine && formLogin.controls.password.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.password.pristine && formLogin.controls.password?.errors?.minlength">\n\n                        {{\'Password must have more than 6 characters\' | translate}}\n\n                    </p>\n\n\n\n                </ion-item>\n\n            </ion-list>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <a ion-button block clear full (click)="resetPassword()">{{\'Forgot Password\'|translate}}</a>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button block full color="primary" type="submit">{{\'Log in\' | translate}}\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n\n\n        <form *ngSwitchCase="\'signup\'" [formGroup]="formSignup" #rFormSignup="ngForm"\n\n              (ngSubmit)="createUser(rFormSignup)">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Name\'| translate}} *</ion-label>\n\n                    <ion-input type="text" formControlName="name"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.name.pristine && !formSignup.controls.name.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.name.pristine && formSignup.controls.name.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Email\' | translate}} *</ion-label>\n\n                    <ion-input #email type="email" formControlName="email"\n\n                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.email.pristine && !formSignup.controls.email.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.email.pristine && formSignup.controls.email.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <!--Username-->\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Username\' | translate}} *</ion-label>\n\n                    <ion-input #username type="text" formControlName="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.username.pristine && !formSignup.controls.username.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.username.pristine && formSignup.controls.username.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{ \'Password\' | translate }} *</ion-label>\n\n                    <ion-input #password [type]="inputPasswordType" formControlName="password"></ion-input>\n\n                    <a ion-button clear (click)="toggleInputPassword()" item-right>\n\n                        <ion-icon [name]="inputPasswordIcon"  ></ion-icon>\n\n                    </a>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.password.pristine && !formSignup.controls.password.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.password.pristine && formSignup.controls.password.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.password.pristine && formSignup.controls.password?.errors?.minlength">\n\n                        {{\'Password must have more than 5 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Confirm password\' | translate}} *</ion-label>\n\n                    <ion-input [type]="inputPasswordType" formControlName="passwordConfirmation"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.passwordConfirmation.pristine && !formSignup.controls.passwordConfirmation.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.passwordConfirmation.pristine && formSignup.controls.passwordConfirmation.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.passwordConfirmation.pristine && formSignup.controls.passwordConfirmation?.errors?.minlength">\n\n                        {{\'Password must have more than 5 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n            </ion-list>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button type="submit" full ion-button block color="primary">{{\'Sign up\' | translate}}</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n    </div>\n\n\n\n    <ion-row>\n\n        <ion-col><a ion-button block icon-left color="facebook" (click)="loginFacebook()">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n            {{\'Signup with Facebook\' | translate }}</a>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__["a" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_external_lib__["a" /* ExternalLibProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the OddsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OddsProvider = (function () {
    function OddsProvider(http) {
        this.http = http;
        this.apiUrl = 'https://odds-api-issue-5-dev.casinoportugal.pt/api/v1/';
        console.log('Hello OddsProvider Provider');
    }
    OddsProvider.prototype.getFixtures = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'competitions/61').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    OddsProvider.prototype.getMarkets = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'fixtures/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    OddsProvider.prototype.getSelections = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'odds/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    OddsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OddsProvider);
    return OddsProvider;
}());

//# sourceMappingURL=odds.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globals_globals__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_bet__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BetPage = (function () {
    function BetPage(navCtrl, navParams, userBetProvider, globalsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userBetProvider = userBetProvider;
        this.globalsProvider = globalsProvider;
        this.selectedselections = [];
        this.selectedselections = globalsProvider.selections;
        this.totalodd = this.globalsProvider.calculateOdd();
    }
    BetPage.prototype.makebet = function (amount) {
        this.userBetProvider.betmultiple(amount, this.selectedselections);
    };
    BetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bet',template:/*ion-inline-start:"C:\work\apps\battle\battlebet\src\pages\bet\bet.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{\'Bet\'| translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <ion-item *ngFor="let selection of selectedselections">\n      <ion-avatar item-start>\n        <ion-icon name="ios-football" ></ion-icon>\n      </ion-avatar>\n      <h2>{{selection.name}}</h2>\n      <ion-note item-end>{{selection.odd}}</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Odd</ion-label>\n      <ion-input disabled="true" placeholder="{{totalodd}}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Value</ion-label>\n      <ion-input [(ngModel)]="betamount" type="text"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="makebet(betamount)" block>Bet</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\apps\battle\battlebet\src\pages\bet\bet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_bet__["a" /* UserBetProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_globals_globals__["a" /* GlobalsProvider */]])
    ], BetPage);
    return BetPage;
}());

//# sourceMappingURL=bet.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.js.map