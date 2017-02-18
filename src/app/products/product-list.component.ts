import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';

import { IProduct } from './product.model';

@Component({
	moduleId: module.id,
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 70;
	imageMargin: number = 2;
	showImage: boolean = false;
	placeholderFilter: string = 'Introduce a filter...';
	listFilter: string = '';
	errorMessage: string = '';

	products: IProduct[];

	constructor(private productService: ProductService) { }

	displayFilter(): string {
		return '- Filtered by: ' + this.listFilter;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}

	getProducts() {
		this.productService.getProducts().subscribe(
			products => this.products = products,
			error => this.errorMessage = <any>error);
	}

	ngOnInit(): void {
		this.getProducts();
	}
}
