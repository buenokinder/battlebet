import {Injectable} from "@angular/core";

declare var Parse: any;

@Injectable()
export class UserBetProvider {


    private _fields = [
        'user',
        'amount',
        'result',
        'resultAmount',
        'card',
        'odd'
    ];

    private _ParseObject: any = Parse.Object.extend('UserBet', {});

   

    constructor() {
        this._fields.map(field => {
            Object.defineProperty(this._ParseObject.prototype, field, {
                get: function () {return this.get(field)},
                set: function (value) { this.set(field, value)}
            });
        });       
    }

    bet(username: string, betamount: number, selectionId: number): Promise<any> {
        return Parse.Cloud.run('bet', {username: username, betamount: betamount, selectionId: selectionId})
    }

    getBets(status: string) {
        let currentUser = Parse.User.current();
        currentUser.get('id');

        var ParseQuery = new Parse.Query(this._ParseObject);
        ParseQuery.equalTo("status", status);
        
        return ParseQuery.find();
    }

}
