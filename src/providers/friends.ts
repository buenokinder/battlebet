import {Injectable} from "@angular/core";

declare var Parse: any;

@Injectable()
export class FriendsProvider {

    private _fields = [
        'Gambler',
        'Friend',
        'status',
    ];

    private _ParseObject: any = Parse.Object.extend('Friends', {});

    constructor() {
        this._fields.map(field => {
            Object.defineProperty(this._ParseObject.prototype, field, {
                get: function () {return this.get(field)},
                set: function (value) { this.set(field, value)}
            });
        });        
    }

    friends(params: any): Promise<any> {
        return Parse.Cloud.run('getFriends', params);
    }

    create(item: any): Promise<any> {
        return new this._ParseObject().save(item);
    }

    put(item: any): Promise<any> {
        if (!item.id) {
            let objPlace = new this._ParseObject();
            return objPlace.save(item);
        } else {
            return item.save();
        }

    }

    destroy(item): Promise<any> {
        return item.destroy();
    }
}
