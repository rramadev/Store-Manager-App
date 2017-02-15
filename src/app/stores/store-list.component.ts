import { Component, OnInit } from '@angular/core';

import { IStore } from './store.model';
import { StoreService } from './store.service';

@Component({
	moduleId: module.id,
	templateUrl: './store-list.component.html',
	styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
	pageTitle: string = 'Store List';
	imageWidth: number = 70;
	imageMargin: number = 2;
	showImage: boolean = false;
	storeFilterFields: string[] = ['name', 'address'];
	storeNoDuplicateFilter: string = 'address';
	placeholderFilter: string = 'Introduce a filter...';
	errorMessage: string = '';
	filterInput: string = '';
	orderByFilter: string = '';
	storeFilter: string = '';

	stores: IStore[];

	constructor(private _storeService: StoreService) { }

	setValue(input: string): void {
		this.filterInput = input;
	}

	displayFilter(): string {
		return '- Filtered by: ' + this.filterInput;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		this._storeService.getStores().subscribe(
			stores => this.stores = stores,
      error => this.errorMessage = <any>error,
      () => {
				// Set default filter
				this.orderByFilter = 'name';
				// Set default store image
				for (let store of this.stores) {
					store['imageUrl'] =
					 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png';
				};
				// Remove duplicated addresses
        // var noDuplicateStores = [];
        // var addresses = [];
        // var key = "";
        // for (let store of this.stores) {
        //   key = store['address'];
        //   if (addresses.indexOf(key) === -1) {
        //     addresses.push(key);
        //     noDuplicateStores.push(store);
        //   }
        // };
				// Remove duplicated addresses
				// Using filter method
				let addressList: string[] = [];
				let noDuplicateStores = this.stores.filter(store => {
					return (addressList.indexOf(store['address']) === -1) ?
						addressList.push(store['address'])
						: false;
				});
				this.stores = noDuplicateStores.slice();
      }
		);
		// subscription.unsubscribe();
	}

}
