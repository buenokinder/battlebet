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

    betmultiple(betamount:number, selections)
    {
        let currentUser = Parse.User.current();
        let currentuserId =  currentUser.get('id');
        return Parse.Cloud.run('bet', {user: currentuserId, betAmount: betamount,selections: selections});
    }

    bet(betamount: number, selectionId: number,marketName:string,fixtureId:number, fixtureName:string, fixtureGameDate:string, odd:string): Promise<any> {
        let currentUser = Parse.User.current();
        let currentuserId =  currentUser.get('id');
        return Parse.Cloud.run('bet', {user: currentuserId, betAmount: betamount, selectionId: selectionId,marketName: marketName, fixtureId: fixtureId,fixtureName:fixtureName,fixtureGameDate:fixtureGameDate, odd:odd});
    }

    getBets(status: string) {
        let currentUser = Parse.User.current();
        currentUser.get('id');

        var ParseQuery = new Parse.Query(this._ParseObject);
        ParseQuery.equalTo("status", status);

        return ParseQuery.find();
    }

}
