import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';
import 'rxjs/add/operator/startWith';

import { IStore } from './store.model';
import { StoreService } from './store.service';
import { StoreListMapDialogComponent } from './store-list-map-dialog.component';

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
	storeFilterFields: string[];
	storeNoDuplicateFilter: string = 'address';
	placeholderFilter: string = 'Looking for...';
	errorMessage: string = '';
	storeFilterInput: string = '';
	storeFilterMsg: string = '';
	orderByFilter: string = '';
	cityFilterInput: string = '';

	cityCtrl: FormControl;
  filteredCities: any;
	cityList = [
    'Berlin',
		'Bochum',
		'Darmstadt',
		'Gelsenkirchen',
    'Hamburg',
		'Kiel',
		'Köln',
    'München',
		'Trier',
		'Witten'
  ];

	stores: IStore[];

	constructor(private _storeService: StoreService,
							public dialog: MdDialog) {
		this.cityCtrl = new FormControl();
    this.filteredCities = this.cityCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterCitiesInput(name));
	}

	filterCitiesInput(val: string) {
    return val ? this.cityList.filter((s) => new RegExp(val, 'gi').test(s))
			: this.cityList;
  }

	setFilterValue(input: string, type: string): void {
		type==='search' ? (
			this.cityCtrl.setValue(''),
			this.storeFilterMsg = '- Filtered by: ',
			this.storeFilterInput = input,
			this.storeFilterFields = ['name', 'address']
		) : (
			this.cityFilterInput = '',
			this.storeFilterMsg = '- Filtered by city: ',
			this.storeFilterInput = this.cityCtrl.value,
			this.storeFilterFields = ['address']
		);
	}

	displayFilter(): string {
		return this.storeFilterMsg + this.storeFilterInput;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	openDialog(address: string, name: string): void {
    let dialogRef = this.dialog.open(StoreListMapDialogComponent);
		dialogRef.componentInstance.address = address;
		dialogRef.componentInstance.name = name;
		//dialogRef.afterClosed().subscribe(result => { });
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
