import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {App, AlertController, NavController} from "ionic-angular";
import { Facebook , FacebookLoginResponse} from '@ionic-native/facebook'
import {FacebookService} from "ng2-facebook-sdk";
import {TabsPage} from "../tabs/tabs";
import {IonicUtilProvider} from "../../providers/ionic-util";
import {UserProvider} from "../../providers/user";
import {ExternalLibProvider} from "../../providers/external-lib";
import {APP_NAME} from "../../config";
import {TabAccountSettingsPage} from "../tab-account-settings/tab-account-settings";
declare const Parse: any;
declare const FB: any;

@Component({
    selector   : 'page-auth',
    templateUrl: 'auth.html'
})

export class AuthPage {
    authType: string = 'login';
    error: string;
    facebook: any;
    facebookNative: Facebook;
    appName:string = APP_NAME;
    facebookInitialised:boolean =false;
    facebookBrowser: FacebookService;
    formLogin: any;
    formSignup: any;

    alertTranslate: any        = {};
    cordova: boolean           = false;
    inputPasswordType: string  = 'password';
    inputPasswordIcon: string  = 'eye-off';
    inputPasswordShow: boolean = false;

    constructor(private navCtrl: NavController,
                private provider: UserProvider,
                private alertCtrl: AlertController,
                private util: IonicUtilProvider,
                private fb: FacebookService,
                private formBuilder: FormBuilder,
                private app: App,
                private lib: ExternalLibProvider,
    ) {
        // Google Analytics
     
        // Define Facebook Browser and Native
        this.facebookNative = this.facebook;
       // this.facebookNative = Facebook;
        this.cordova        = this.util.cordova;

        if (!this.cordova) {
            this.loadFacebook();
            this.facebook = this.fb;
        } else {
            this.facebook = this.facebookNative;
        }


        // Translate Search Bar Placeholder
        this.util.translate('Enter your email so we can send you a link to reset your password').then((res: string) => { this.alertTranslate.message = res; });
        this.util.translate('Open your email and also check the spam box').then((res: string) => { this.alertTranslate.emailRecoverySend = res; });
        this.util.translate('Email is required').then((res: string) => { this.alertTranslate.emailRequired = res; });
        this.util.translate('Recovery your password').then((res: string) => { this.alertTranslate.title = res; });
        this.util.translate('Email').then((res: string) => { this.alertTranslate.email = res; });
        this.util.translate('Cancel').then((res: string) => { this.alertTranslate.cancel = res; });
        this.util.translate('Submit').then((res: string) => { this.alertTranslate.submit = res; });
    }

    initFacebook() {
        console.log('Facebook Ok');
    }

    loadFacebook() {

        this.addConnectivityListeners();

        if (typeof FB == 'undefined' ) {

            console.log('Facebook JavaScript needs to be loaded.');
            this.disableFacebook();

            if (this.util.isOnline()) {
                console.log('online, loading facebook');
                this.lib.facebookLib();

            }
        } else {

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

    }

    disableFacebook() {
        console.log('disable facebook');
    }

    enableFacebook() {
        console.log('enable facebook');
    }

    addConnectivityListeners() {

        let onOnline = () => {

            setTimeout(() => {
                if (typeof FB == 'undefined' ) {
                    this.lib.facebookLib();
                } else {
                    if (!this.facebookInitialised) {
                        this.initFacebook();
                    }
                    this.enableFacebook();
                }
            }, 2000);

        };

        let onOffline = () => {
            this.disableFacebook();
        };

        document.addEventListener('online', onOnline, false);
        document.addEventListener('offline', onOffline, false);

    }

    ionViewWillLoad() {
        
        this.formLogin = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        });

        // Validate user registration form
        this.formSignup = this.formBuilder.group({
            name                : ['', Validators.required],
            email               : ['', Validators.required],
            username            : ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            gender              : ['', Validators.required],
            password            : ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            passwordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    toggleInputPassword() {
        this.inputPasswordShow = !this.inputPasswordShow;
        this.inputPasswordType = this.inputPasswordShow ? 'text' : 'password';
        this.inputPasswordIcon = this.inputPasswordShow ? 'eye' : 'eye-off';
    }

    login(form): void {

        if (form.valid) {
            this.util.onLoading();

            this.provider.signIn(this.formLogin.value).then(user => {
                console.log(user);
                console.log(this.provider.current());
                this.util.endLoading();
                this.onPageTabs();
            }).catch(error => {
                console.log(error);
                this.util.endLoading();
                this.util.toast(error.message);
            });
        }
    }

    validPassword(password: string, confirm: string): boolean {
        return (password == confirm) ? true : false;
    }

    createUser(form): void {
        let newForm = this.formSignup.value;
    

        if (this.validPassword(newForm.password, newForm.passwordConfirmation)) {
            this.util.onLoading();

            delete newForm['passwordConfirmation'];
            this.provider.signUp(newForm).then(user => {
                this.provider.current = user;
                this.util.endLoading();
                this.onPageTabs();
            }).catch(error => {
                this.util.endLoading();
                this.util.toast(error.message);
            });

        } else {
            this.util.toast('Password not confirm');
        }
    }

    onPageTabs(): void {
        this.app.getRootNav().setRoot(TabsPage);
    }

    loginFacebook(): void {
        // new LoginOptions;

        // this.fb.login()
        // .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
        // .catch(e => console.log('Error logging into Facebook', e));

        this.util.onLoading();
        this.facebook.getLoginStatus().then(response => {
            console.log('getLoginStatus', response);
            if (response.status === 'connected') {
                console.log(1);
                this.processFacebookLogin(response);
            } else {
                console.log(2);
                this.facebook.login(['public_profile']).then((authData) => {
                    console.log('facebook login', authData);
                    this.processFacebookLogin(authData);
                }).catch(error => {
                    console.log(error);
                    this.util.endLoading();
                    this.util.toast(error.message);
                });
            }
        }).catch(error => {
            console.log(error);
            this.util.endLoading();
            this.util.toast(error.message);
        });
    }

    processFacebookLogin(authData) {
        this.facebook.api('/me?fields=id,name,birthday,last_name,first_name,email,gender', ['public_profile'])
            .then((fbData) => {
                console.log('fbData', fbData);

                let facebookAuthData = {
                    id             : authData['authResponse']['userID'],
                    access_token   : authData['authResponse']['accessToken'],
                    expiration_date: (new Date().getTime() + 1000).toString()
                };

                this.util.onLoading('Updating Facebook Profile');

                Parse.FacebookUtils.logIn(facebookAuthData, {
                    success: (user) => {
                        if (!user.existed()) {
                            // New user
                            console.warn('UserProvider signed up and logged in through Facebook!', user);

                            this.provider.facebookSyncProfile(fbData)
                                .then(this.provider.updateWithFacebookData())
                                .then(result => {
                                    this.util.endLoading();
                                    this.onPageTabs();
                                });

                        } else {
                            // Old UserProvider
                            console.info('UserProvider logged in through Facebook!', user);
                            this.onPageTabs();
                            this.provider.facebookSyncProfile(fbData)
                                .then(this.provider.updateWithFacebookData())
                                .then(result => {
                                    this.util.endLoading();
                                    this.onPageTabs();
                                });

                        }
                    },
                    error  : (user, error) => {
                        console.error('UserProvider cancelled the Facebook login or did not fully authorize.', user, error);
                        this.util.endLoading();
                        this.util.toast('UserProvider cancelled the Facebook login or did not fully authorize');

                    }
                });


            });
    }


    resetPassword(): void {
    
        this.alertCtrl.create({
            title  : this.alertTranslate.title,
            message: this.alertTranslate.message,
            inputs : [
                {
                    placeholder: this.alertTranslate.email,
                    name       : 'email',
                    type       : 'email'
                }
            ],
            buttons: [
                {
                    text: this.alertTranslate.cancel,
                    role: 'cancel'
                },
                {
                    text   : this.alertTranslate.submit,
                    handler: data => {
                        if (data.email) {
                            this.util.onLoading();
                            this.provider.recoverPassword(data.email).then(result => {
                                console.log(result);
                                setTimeout(() => {
                                    this.util.endLoading();
                                    this.util.toast(this.alertTranslate.emailRecoverySend);
                                }, 500);
                                return false;
                            }).catch(error => {
                                this.util.toast('Server error');
                                this.util.endLoading();
                            });
                        } else {
                            this.util.toast(this.alertTranslate.emailRequired);
                        }
                    }
                }
            ]
        }).present();
    }

}