import { Component, OnInit  } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { IProduct } from './product.model';

@Component({
	moduleId: module.id,
  selector: 'product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
	styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent {
	product: IProduct;
	editProduct: IProduct;

  constructor(public dialogRef: MdDialogRef<ProductDetailDialogComponent>) { }

	ngOnInit(): void {
		this.editProduct = Object.assign({}, this.product);
	}
}
