import { Component, OnInit } from '@angular/core';

import { IStore } from './store';
import { StoreService } from './store.service';

@Component({
    templateUrl: 'app/stores/store-list.component.html',
    styleUrls: ['app/stores/store-list.component.css']
})
export class StoreListComponent implements OnInit {
    pageTitle: string = 'Store List';
    imageWidth: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    storeFilter: string;
    orderByFilter: string;
    placeholderFilter: string = 'Introduce a filter...';
    errorMessage: string;

    stores: IStore[];

    constructor(private _storeService: StoreService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

      this._storeService.getStores() 
        .subscribe(stores => this.stores = stores,
                  error => this.errorMessage = <any>error,
                  () => {
                    // Set default filter
                    this.orderByFilter = 'name';
                    // Remove duplicated addresses
                    var noDuplicateStores = [];
                    var addresses = [];
                    var key = "";
                    for (let store of this.stores) {
                      key = store['address'];
                      if (addresses.indexOf(key) === -1) {
                        addresses.push(key);
                        noDuplicateStores.push(store);
                      }
                    };
                    this.stores = noDuplicateStores.slice();
                    // Set default store image
                    for (let store of this.stores) {
                      store['imageUrl'] = "https://openclipart.org/download/216947/bread-and-banana02.svg";
                    };
                  }
       );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Store List: ' + message;
    }

}
