import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IStore } from './store';

@Injectable()
export class StoreService {
    private _storeUrl = 'api/products/mealsaverStores.json';

    constructor(private _http: Http) {}

    getStores(): Observable<IStore[]> {
      return this._http.get(this._storeUrl)
        .map((response: Response) => <IStore[]> response.json())
        // .do(data => console.log('All Stores: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
