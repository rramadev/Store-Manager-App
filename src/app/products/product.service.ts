import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { IProduct } from './product.model';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  private products: Observable<IProduct[]> = null;

  constructor(private http: Http) {}

  getProducts(): Observable<IProduct[]> {
    if (!this.products) {
      this.products = this.http.get(this.productUrl)
      .map((response: Response) => <IProduct[]> response.json())
      // .do(data => console.log('All: ' +  JSON.stringify(data)))
      .publishReplay(1)
      .refCount()
      .catch(this.handleError);
    }
    return this.products;
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
    .map((products: IProduct[]) => products.find(p => p.productId === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
