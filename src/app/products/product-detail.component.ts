import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { ProductDetailDialogComponent } from './product-detail-dialog.component';
import { ProductService } from './product.service';
import { LoggerService } from '../core/logger.service';

import { IProduct } from './product.model';

@Component({
	moduleId: module.id,
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = '';
	errorMessage: string = '';
	showBar: boolean = false;
	updated: boolean = false;
	updateMessage: string = ' - Updated!';
	deleted: boolean = false;
	deleteMessage: string = ' - Deleted!';
	product: IProduct;
	private subcription: Subscription;

	constructor(private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
		public dialog: MdDialog,
		private loggerService: LoggerService) { }

	onBack(): void {
		this.router.navigate(['/products']);
	}

	onRatingClicked(message: string): void {
		this.setTitle(message);
	}

	setTitle(message = ''): void {
		this.pageTitle = `Product Detail: ${this.product.productName} ${message}`;
	}

	openDialog(): void {
		this.updated = false;
		let dialogRef = this.dialog.open(ProductDetailDialogComponent);
		dialogRef.componentInstance.product = this.product;
		dialogRef.afterClosed().subscribe(result => {
			(typeof result === 'object') ? (
				this.showBar = true,
				this.updateProduct(result))
				: this.updated = false;
		});
	}

	getProduct(id: number) {
		this.productService.getProduct(id).subscribe(
			product => {
				this.product = product;
				this.setTitle();
			},
			error => this.errorMessage = <any>error);
	}

	updateProduct(product: IProduct) {
		this.productService.updateProduct(product).subscribe(
			result => {
				this.product = Object.assign({}, product);
				this.showBar = false;
				this.updated = true;
        this.loggerService.log('Product updated successfully!');
			},
			error => {
				this.errorMessage = <any>error;
				this.showBar = false;
        this.loggerService.error('Error on product update!');
			});
	}

	deleteProduct(id: number) {
		this.updated = false;
		this.showBar = true;
		this.productService.deleteProduct(id).subscribe(
			result => {
				// this.product = undefined;
				this.showBar = false;
				this.deleted = true;
				this.setTitle();
        this.loggerService.log('Product deleted successfully!');
			},
			error => this.errorMessage = <any>error);
	}

	ngOnInit(): void {
		this.subcription = this.route.params.subscribe(
			params => {
				let id = +params['id'];
				this.getProduct(id);
			});
	}
}
