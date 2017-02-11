import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product.model';
import { ProductService } from './product.service';

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
						  private productService: ProductService) {	}

	ngOnInit(): void {
		// let id = +this.route.snapshot.params['id'];
		// this.pageTitle += `: ${id}`;
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
}
