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
	imageWidth: number = 60;
	imageMargin: number = 2;
	showImage: boolean = true;
	showTools: boolean = true;
	showBar: boolean = false;
	updated: boolean = false;
	updateMessage: string = ' - Store Updated!';
	deleted: boolean = false;
	deleteMessage: string = ' - Store Deleted!';
	storeFilterFields: string[];
	storeNoDuplicateFilter: string = 'address';
	placeholderFilter: string = 'Looking for...';
	errorMessage: string = '';
	storeFilterInput: string = '';
	storeFilterMsg: string = '';
	orderByFilter: string = 'name';
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

	constructor(private storeService: StoreService,
							public dialog: MdDialog) {
		this.startCityCtrl();
	}

	startCityCtrl(): void {
		this.cityCtrl = new FormControl();
    this.filteredCities = this.cityCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCitiesInput(name));
	}

	filterCitiesInput(val: string): string[] {
    return val ?
			this.cityList.filter((s) => new RegExp(val, 'gi').test(s))
			: this.cityList;
  }

	setFilterValue(input: string, type: string): void {
		type === 'search' ? (
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

	getStores(): void {
		this.storeService.getStores().subscribe(
			stores => this.stores = stores,
      error => this.errorMessage = <any>error,
      () => {
				if (this.showBar) {
					this.showBar = false;
					this.deleted = true;
				};
				// Set default filter
				// this.orderByFilter = 'name';
				// Set default store image
				// for (let store of this.stores) {
				// 	store['imageUrl'] =
				// 	 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png';
				// };
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
				// Filter JSON by fields
				// let filteredObject = {},
				// filteredArray = [],
	    	// p = new Set(Object.keys(this.stores[0])),
	    	// blacklist: string[] = ['styleUrl', 'ExtendedData'];
				// blacklist.forEach(a => p.delete(a));
				// for (var i in this.stores) {
				// 	filteredObject['id'] = i;
				// 	p.forEach(k => filteredObject[k] = this.stores[i][k]);
				// 	filteredArray.push(filteredObject);
				// 	filteredObject = {};
				// }
				// console.log(JSON.stringify(filteredArray));
				// Create Cities List
				// let citiesList = this.stores.reduce((acc,curr) => {
				// 	let posi = curr.description.indexOf('- Stadt:') + 9;
				// 	let posf = curr.description.indexOf('<br>Adresse - Staat');
				// 	let city = curr.description.substring(posi, posf);
				// 	if (acc.indexOf(city)===-1) {
				// 		acc.push(city);
				// 	}
				// 	return acc;
				// }, []);
      }
		);
	}

	deleteStore(id: number) {
		this.showBar = true;
		this.deleted = false;
		this.storeService.deleteStore(id).subscribe(
			result => {
				this.getStores();
				// let updatedStores = this.stores.filter(store => store.id !== id);
				// this.stores = JSON.parse(JSON.stringify(updatedStores));
			},
			error => {
				this.errorMessage = <any>error;
				this.showBar = false;
			});
	}

	openDialog(address: string, name: string): void {
    let dialogRef = this.dialog.open(StoreListMapDialogComponent);
		dialogRef.componentInstance.address = address;
		dialogRef.componentInstance.name = name;
  }

	ngOnInit(): void {
		this.getStores();
	}
}
