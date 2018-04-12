import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the OddsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OddsProvider {

    apiUrl = 'https://odds-api-issue-5-dev.casinoportugal.pt/api/v1/';
  constructor(public http: HttpClient) {
    console.log('Hello OddsProvider Provider');
  }


    getFixtures() {

        return new Promise(resolve => {
            this.http.get(this.apiUrl+'competitions/61').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getMarkets(id) {

        return new Promise(resolve => {
            this.http.get(this.apiUrl+'fixtures/'+id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getSelections(id) {

        return new Promise(resolve => {
            this.http.get(this.apiUrl+'odds/'+id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
