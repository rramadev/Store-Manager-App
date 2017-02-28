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
	gridRows: number = 2;
	gridRatio: string = '3:3';
	showImage: boolean = false;
	placeholderFilter: string = 'Looking for...';
	listFilter: string = '';
	errorMessage: string = '';

	products: IProduct[];

	constructor(private productService: ProductService) { }

	onResize(width: number): void {
		this.gridRows = width > 1300 ? 3
											: width > 900 ? 2
												: 1;
		this.gridRatio = width > 1300 ? '3:3'
											: width > 1150 ? '4:3'
												: width > 900 ? '3:3'
													: '4:3';
  }

	getWindowWidth(): number {
		return window.innerWidth;
	}

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
		this.onResize(this.getWindowWidth());
	}
}
