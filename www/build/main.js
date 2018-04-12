webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(115);
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
    function HomePage(navCtrl, User, app) {
        this.navCtrl = navCtrl;
        this.User = User;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        this.User.logout();
        this.User.cleanDBFollowing();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n\n\n  <ion-list>\n\n   \n\n    <ion-item (click)="logout()">{{\'Logout\'|translate}}</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_push__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_util__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(114);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParsePushProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ParsePushProvider);
    return ParsePushProvider;
}());

//# sourceMappingURL=parse-push.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(114);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IonicUtilProvider);
    return IonicUtilProvider;
}());

//# sourceMappingURL=ionic-util.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_external_lib__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(57);
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
        var _this = this;
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
                            // this.navCtrl.push(UserAvatarPage);
                        });
                    }
                    else {
                        // Old UserProvider
                        console.info('UserProvider logged in through Facebook!', user);
                        _this.provider.facebookSyncProfile(fbData)
                            .then(_this.provider.updateWithFacebookData())
                            .then(function (result) {
                            _this.util.endLoading();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
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
            selector: 'page-auth',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\auth\auth.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{appName}}</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar color="primary">\n\n        <ion-segment [(ngModel)]="authType" color="primary">\n\n            <ion-segment-button value="login">{{\'Login\' | translate}}</ion-segment-button>\n\n            <ion-segment-button value="signup">{{\'Signup\' | translate}}</ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div [ngSwitch]="authType">\n\n        <form *ngSwitchCase="\'login\'" [formGroup]="formLogin" #rFormLogin="ngForm" (ngSubmit)="login(rFormLogin)">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Username\' | translate}}</ion-label>\n\n                    <ion-input type="text" formControlName="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formLogin.controls.username.pristine && !formLogin.controls.username.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.username.pristine && formLogin.controls.username.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.username.pristine && formLogin.controls.username?.errors?.minlength">\n\n                        {{\'Password must have more than 4 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Password\'|translate}}</ion-label>\n\n                    <ion-input [type]="inputPasswordType" formControlName="password"></ion-input>\n\n                    <a ion-button clear (click)="toggleInputPassword()" item-right>\n\n                        <ion-icon [name]="inputPasswordIcon"  ></ion-icon>\n\n                    </a>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formLogin.controls.password.pristine && !formLogin.controls.password.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.password.pristine && formLogin.controls.password.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formLogin.controls.password.pristine && formLogin.controls.password?.errors?.minlength">\n\n                        {{\'Password must have more than 6 characters\' | translate}}\n\n                    </p>\n\n\n\n                </ion-item>\n\n            </ion-list>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <a ion-button block clear full (click)="resetPassword()">{{\'Forgot Password\'|translate}}</a>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button block full color="primary" type="submit">{{\'Log in\' | translate}}\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n\n\n        <form *ngSwitchCase="\'signup\'" [formGroup]="formSignup" #rFormSignup="ngForm"\n\n              (ngSubmit)="createUser(rFormSignup)">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Name\'| translate}} *</ion-label>\n\n                    <ion-input type="text" formControlName="name"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.name.pristine && !formSignup.controls.name.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.name.pristine && formSignup.controls.name.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Email\' | translate}} *</ion-label>\n\n                    <ion-input #email type="email" formControlName="email"\n\n                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.email.pristine && !formSignup.controls.email.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.email.pristine && formSignup.controls.email.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <!--Username-->\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Username\' | translate}} *</ion-label>\n\n                    <ion-input #username type="text" formControlName="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.username.pristine && !formSignup.controls.username.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.username.pristine && formSignup.controls.username.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{ \'Password\' | translate }} *</ion-label>\n\n                    <ion-input #password [type]="inputPasswordType" formControlName="password"></ion-input>\n\n                    <a ion-button clear (click)="toggleInputPassword()" item-right>\n\n                        <ion-icon [name]="inputPasswordIcon"  ></ion-icon>\n\n                    </a>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.password.pristine && !formSignup.controls.password.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.password.pristine && formSignup.controls.password.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.password.pristine && formSignup.controls.password?.errors?.minlength">\n\n                        {{\'Password must have more than 5 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{\'Confirm password\' | translate}} *</ion-label>\n\n                    <ion-input [type]="inputPasswordType" formControlName="passwordConfirmation"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="form-error-list"\n\n                          *ngIf="!formSignup.controls.passwordConfirmation.pristine && !formSignup.controls.passwordConfirmation.valid">\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.passwordConfirmation.pristine && formSignup.controls.passwordConfirmation.hasError(\'required\')">\n\n                        {{\'This is a required field.\' | translate}}\n\n                    </p>\n\n                    <p class="form-error" item-right\n\n                       *ngIf="!formSignup.controls.passwordConfirmation.pristine && formSignup.controls.passwordConfirmation?.errors?.minlength">\n\n                        {{\'Password must have more than 5 characters\' | translate}}\n\n                    </p>\n\n                </ion-item>\n\n            </ion-list>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button type="submit" full ion-button block color="primary">{{\'Sign up\' | translate}}</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n    </div>\n\n\n\n    <ion-row>\n\n        <ion-col><a ion-button block icon-left color="facebook" (click)="loginFacebook()">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n            {{\'Signup with Facebook\' | translate }}</a>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_external_lib__["a" /* ExternalLibProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__games_games__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(109);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__games_games__["a" /* GamesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Games" tabIcon="ios-football"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixture_fixture__ = __webpack_require__(224);
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
    function GamesPage(navCtrl, oddsProvider) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.fixtureid = '';
        this.getFixtures();
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
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\games\games.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Games\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let fixture of fixtures">\n\n      <ion-avatar item-start>\n\n        <ion-icon name="ios-football" ></ion-icon>\n\n      </ion-avatar>\n\n      <h2>{{fixture.name}}</h2>\n\n      <ion-note item-end>{{fixture.startTime | date:"short"}}</ion-note>\n\n      <button ion-button color="secondary" block (click)="pushFixture(fixture.id)">Bet</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\games\games.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_market__ = __webpack_require__(225);
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
    function FixturePage(navCtrl, oddsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.navParams = navParams;
        this.getMarkets(this.navParams.get('id'));
    }
    FixturePage.prototype.getMarkets = function (id) {
        var _this = this;
        this.oddsProvider.getMarkets(id)
            .then(function (data) {
            _this.fixture = data["data"]["name"];
            _this.markets = data["data"]["markets"];
            console.log(_this.markets);
        });
    };
    FixturePage.prototype.pushMarket = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__market_market__["a" /* MarketPage */], { id: id });
    };
    FixturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fixture',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\fixture\fixture.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{fixture}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let market of markets">\n\n      <ion-avatar item-start>\n\n        <ion-icon name="ios-football" ></ion-icon>\n\n      </ion-avatar>\n\n      <h2>{{market.name}}</h2>\n\n      <button ion-button color="secondary" block (click)="pushMarket(market.id)">Bet</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\fixture\fixture.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FixturePage);
    return FixturePage;
}());

//# sourceMappingURL=fixture.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__ = __webpack_require__(56);
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
    function MarketPage(navCtrl, oddsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.oddsProvider = oddsProvider;
        this.navParams = navParams;
        this.getSelections(this.navParams.get('id'));
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
    MarketPage.prototype.selectOdd = function (odd) {
        this.selectedodd = odd;
    };
    MarketPage = MarketPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\market\market.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bet\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n      <ion-list>\n\n        <button (click)="selectOdd(selection.odd)" *ngFor="let selection of selections" ion-button>{{selection.name}}<br>{{selection.odd}}</button>\n\n      </ion-list>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Odd</ion-label>\n\n            <ion-input *ngIf="selectedodd" disabled="true" placeholder="{{selectedodd}}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n        <ion-label fixed>Value</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n        <button ion-button color="primary" block>Bet</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\market\market.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_odds_odds__["a" /* OddsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MarketPage);
    return MarketPage;
    var MarketPage_1;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n      <ion-title>\n\n          {{\'About\' | translate}}\n\n      </ion-title>\n\n      <ion-buttons start>\n\n          <button ion-button (click)="dismiss()">\n\n              <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\work\apps\battlebet\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalLibProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_facebook_sdk__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(57);
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
        userLang = /(pt|en|de)/gi.test(userLang) ? userLang : __WEBPACK_IMPORTED_MODULE_2__config__["g" /* language_default */].split('_')[0];
        var lang = __WEBPACK_IMPORTED_MODULE_2__config__["h" /* languages */].filter(function (item) { return item.code.toLowerCase().indexOf(userLang.toLowerCase()) > -1; });
        // Create Facebook in Browser
        var script = document.createElement('script');
        script.id = 'facebook';
        script.src = 'https://connect.facebook.net/' + lang[0]['code'] + '/sdk.js';
        document.body.appendChild(script);
        var fbParams = {
            appId: __WEBPACK_IMPORTED_MODULE_2__config__["e" /* facebook_appId */],
            xfbml: true,
            version: __WEBPACK_IMPORTED_MODULE_2__config__["f" /* facebook_appVersion */]
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_facebook_sdk__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_games_games__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fixture_fixture__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_odds_odds__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_market_market__ = __webpack_require__(225);
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
        var language = __WEBPACK_IMPORTED_MODULE_6_underscore___default.a.find(__WEBPACK_IMPORTED_MODULE_5__config__["h" /* languages */], { code: userLang }) ? __WEBPACK_IMPORTED_MODULE_6_underscore___default.a.find(__WEBPACK_IMPORTED_MODULE_5__config__["h" /* languages */], { code: userLang }).code : __WEBPACK_IMPORTED_MODULE_5__config__["g" /* language_default */];
        console.log('language', userLang, language);
        this.translate.addLangs(__WEBPACK_IMPORTED_MODULE_5__config__["h" /* languages */].map(function (lang) { return lang.code; }));
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_5__config__["g" /* language_default */]);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fixture_fixture__["a" /* FixturePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */]
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
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fixture_fixture__["a" /* FixturePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_facebook_sdk__["a" /* FacebookService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_odds_odds__["a" /* OddsProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Platform */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_parse_push__ = __webpack_require__(111);
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
        Parse.initialize(__WEBPACK_IMPORTED_MODULE_6__config__["c" /* PARSE_APP_ID */]);
        Parse.serverURL = __WEBPACK_IMPORTED_MODULE_6__config__["d" /* PARSE_SERVER_URL */];
    };
    ;
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\work\apps\battlebet\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\work\apps\battlebet\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_parse_push__["a" /* ParsePushProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sharedProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_util__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parse_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parse_push__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_data__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__external_lib__ = __webpack_require__(228);
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

/***/ 347:
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

/***/ 348:
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

/***/ 349:
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

/***/ 350:
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(223);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PARSE_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PARSE_SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_MAPS_WEB; });
/* unused harmony export GOOGLE_ANALYTICS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return facebook_appId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return facebook_appVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return language_default; });
// AppName
var APP_NAME = 'battlebet';
// Parse
var PARSE_APP_ID = 'c7758f4e-0b09-4a6b-a21a-58b28b74b4b9';
var PARSE_SERVER_URL = 'http://localhost:1337/parse/';
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
        flag: 'br'
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
var language_default = 'br';
//# sourceMappingURL=config.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map