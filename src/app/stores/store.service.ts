import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { IStore } from './store.model';

@Injectable()
export class StoreService {
    private storeUrl = 'api/products/stores.json';
    private stores: Observable<IStore[]> = null;

    constructor(private http: Http) {}

    getStores(): Observable<IStore[]> {
      if (!this.stores) {
        this.stores = this.http.get(this.storeUrl)
          .map((response: Response) => <IStore[]> response.json())
          // .do(data => console.log('All Stores: ' +  JSON.stringify(data)))
          .publishReplay(1)
          .refCount()
          .catch(this.handleError);
      }
      return this.stores;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
