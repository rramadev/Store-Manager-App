import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { ProductDetailDialogComponent } from './product-detail-dialog.component';
import { LoggerService } from '../core/logger.service';

@Component({
	moduleId: module.id,
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: IProduct;
	errorMessage: string;
	private subcription: Subscription;

	constructor(private route: ActivatedRoute,
							private router: Router,
						  private productService: ProductService,
							public dialog: MdDialog,
							private loggerService: LoggerService) {	}

	ngOnInit(): void {
		this.subcription = this.route.params.subscribe(
			params => {
				let id = +params['id'];
				this.getProduct(id);
			});
	}

	getProduct(id: number) {
		this.productService.getProduct(id).subscribe(
			product => this.product = product,
			error => this.errorMessage = <any>error);
	}

	onBack(): void {
		this.router.navigate(['/products']);
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product Detail: ' + message;
	}

	openDialog(): void {
    let dialogRef = this.dialog.open(ProductDetailDialogComponent);
		dialogRef.componentInstance.product = this.product;
    dialogRef.afterClosed().subscribe(result => {
			(typeof result === 'object') ?
				this.product = Object.assign({}, result)
				: this.loggerService.log('Product Edit Dialog cancelled');
    });
  }
}
