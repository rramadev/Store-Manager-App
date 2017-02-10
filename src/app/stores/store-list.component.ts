import { Component, OnInit } from '@angular/core';

import { IStore } from './store.model';
import { StoreService } from './store.service';

@Component({
	moduleId: module.id,
	templateUrl: 'store-list.component.html',
	styleUrls: ['store-list.component.css']
})
export class StoreListComponent implements OnInit {
	pageTitle: string = 'Store List';
	imageWidth: number = 70;
	imageMargin: number = 2;
	showImage: boolean = false;

	storeFilter: string = '';
	storeFilterFields: string[] = ['name', 'address'];
	storeNoDuplicateFilter: string = 'address';
	orderByFilter: string = '';
	placeholderFilter: string = 'Introduce a filter...';
	errorMessage: string = '';
	filterInput: string= '';

	stores: IStore[];

	constructor(private _storeService: StoreService) {
	}

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
		const subscription = this._storeService.getStores()
			.subscribe(stores => this.stores = stores,
            error => this.errorMessage = <any>error,
            () => {
							// Set default filter
							this.orderByFilter = 'name';
							// Set default store image
							for (let store of this.stores) {
								store['imageUrl'] = "https://openclipart.org/download/216947/bread-and-banana02.svg";
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
							// Using filter method
							var addressList: string[] = [];
							var noDuplicateStores = this.stores.filter(store => {
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
