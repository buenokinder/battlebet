import {Component, Input, OnInit} from "@angular/core";
import {App, Events} from "ionic-angular";
import _ from "underscore";
import {IParams} from "../../models/parse.params.model";
import {UserProvider} from "../../providers/user"
import {UserBetProvider} from "../../providers/user-bet";
import {AuthPage} from "../../pages/auth/auth";
import {IonicUtilProvider} from "../../providers/ionic-util";

@Component({
    selector   : 'bet-list-open',
    templateUrl: 'bet-list-open.html'
})
export class BetListOpenComponent implements OnInit {

    @Input() username?: string;
    @Input() event: string;


    params: IParams = {
        limit: 5,
        page : 1
    };

    errorIcon: string      = 'ios-images-outline';
    errorText: string      = '';
    loading: boolean       = true;
    showEmptyView: boolean = false;
    showErrorView: boolean = false;
    data                   = [];

    constructor(
                private provider: UserBetProvider,
                private events: Events,
                private User: UserProvider,
                private app: App,
                private util: IonicUtilProvider,
    ) {

    }

    ngOnInit() {
  
        // Server Request
        this.events.subscribe(this.event + ':params', (params: IParams) => {
            console.info(this.event + ':params', params);
            this.params = params;
            this.feed();
        });

        // Reload
        this.events.subscribe(this.event + ':reload', (params) => {
            console.warn('bet-list-open', this.event + ':reload', params);
            if (params) {
                this.params = params;
            } else {
                this.params.page = 1;
            }
            this.data = []
            // Clean Cache and Reload
            this.feed()
                .then(() => this.events.publish('scroll:up'))
                .catch(console.error);
            ;
        });
    }

    ngOnDestroy() {
        this.events.unsubscribe(this.event + ':reload');
        this.events.unsubscribe(this.event + ':params');
        this.events.unsubscribe('albumgrid:reload');
        this.events.unsubscribe('albumgrid:destroy');
    }


    feed(): Promise<any> {

        return new Promise((resolve, reject) => {

            //console.log(this.params);
            if (this.params.page == 1) {
                this.data    = [];
                this.loading = true;
            }

            this.provider.getBets('waiting').then(data => {
                console.log(data);
                if (data) {
                    this.showErrorView = false;
                    this.showEmptyView = false;
                    _.sortBy(data, 'createdAt').reverse().map(item => this.data.push(item));
                    this.events.publish(this.event + ':moreItem', true);
                }

                if (!this.data.length) {
                    this.showEmptyView = true;
                    this.events.publish(this.event + ':moreItem', true);
                }

                this.loading = false;
                this.events.publish(this.event + ':complete', null);
                resolve(data);
            }).catch(error => {

                if (error.code == Parse.Error['INVALID_SESSION_TOKEN']) {
                    this.User.logout();
                    this.app.getRootNav().setRoot(AuthPage);
                    this.util.toast('Invalid session, please login');
                }

                this.errorText     = error.message;
                this.showErrorView = true;
                this.loading       = false;
                this.events.publish(this.event + ':complete', null);
                reject(error);
            });
        });
    }


  
    public doTry(): void {
        this.showErrorView = false;
        this.feed();
    }

}
