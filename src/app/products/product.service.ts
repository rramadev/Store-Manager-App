import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { LoggerService } from '../core/logger.service';
import { IProduct } from './product.model';

@Injectable()
export class ProductService {
  // private productUrl = 'api/products/products.json';
  private productUrl = 'api/products';  // URL to web api
  private products: Observable<IProduct[]>;
  private product: Observable<IProduct>;

  constructor(private http: Http, private logger: LoggerService) {}

  getProducts(): Observable<IProduct[]> {
    // if (!this.products) {
      this.products = this.http.get(this.productUrl)
      .map((response: Response) => <IProduct[]> response.json().data || { })
      // .do(data => console.log('All: ' +  JSON.stringify(data)))
      .publishReplay(1)
      .refCount()
      .catch(this.logger.handleError);
    // }
    return this.products;
  }

  getProduct(id: number): Observable<IProduct> {
    const url = `${this.productUrl}/${id}`;
    this.product = this.http.get(url)
      .map((response: Response) => <IProduct> response.json().data || { })
      // .do(data => console.log('Get Product: ' +  JSON.stringify(data)))
      .catch(this.logger.handleError);
    return this.product;
    // return this.getProducts()
    // .map((products: IProduct[]) => products.find(p => p.id === id));
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.productUrl}/${product.id}`;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.product = this.http.put(url, JSON.stringify(product), options)
      .map((response: Response) => response.json())
      .catch(this.logger.handleError);
    return this.product;
  }

  deleteProduct(id: number): Observable<IProduct> {
    const url = `${this.productUrl}/${id}`;
    this.product = this.http.delete(url)
      .map((response: Response) => response.json())
      .catch(this.logger.handleError);
    return this.product;
  }
}
