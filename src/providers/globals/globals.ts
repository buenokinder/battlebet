import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalsProvider {

    selections: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello GlobalsProvider Provider');
  }

  calculateOdd(){
    return  this.selections.reduce((sum, item) => sum * item.odd, 1);
  }

  pushSelection(selection)
  {
    this.selections.push(selection);
  }

}
