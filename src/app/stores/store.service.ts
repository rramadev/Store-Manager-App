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
    // private storeUrl = 'api/data/stores.json';
    private storeUrl = 'api/stores';
    private stores: Observable<IStore[]>;
    private store: Observable<IStore>;

    constructor(private http: Http) {}

    getStores(): Observable<IStore[]> {
      // if (!this.stores) {
        this.stores = this.http.get(this.storeUrl)
          .map((response: Response) => <IStore[]> response.json().data)
          // .do(data => console.log('All Stores: ' +  JSON.stringify(data)))
          .publishReplay(1)
          .refCount()
          .catch(this.handleError);
      // }
      console.log("refreshing");
      return this.stores;
    }

    deleteStore(id: number): Observable<IStore> {
      const url = `${this.storeUrl}/${id}`;
      this.store = this.http.delete(url)
        .map((response: Response) => response.json())
        // .do(() => this.getStores())
        .catch(this.handleError);
      console.log("deleted");
      return this.store;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
