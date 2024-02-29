import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Import map and catchError from 'rxjs/operators', and remove 'of'

import { BASE_API_URL } from '../../Config/api';
import {
  findProductByCategoryFailure,
  findProductByCategorySuccess,
  findProductByIdFailure,
  findProductByIdSuccess,
} from './product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProduceService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  API_BASE_URL = BASE_API_URL;

  private getHeader(): HttpHeaders {
    const token = localStorage.getItem('jwt');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  //   find product by category
  findProductsByCategory(reqData: any) {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;

    let params = new HttpParams()
      .set('color', colors)
      .set('size', sizes)
      .set('minPrice', minPrice)
      .set('maxPrice', maxPrice)
      .set('minDiscount', minDiscount)
      .set('category', category)
      .set('stock', stock)
      .set('pageNumber', pageNumber)
      .set('sort', sort)
      .set('pageSize', pageSize);

    const headers = this.getHeader();
    return this.http
      .get(`${this.API_BASE_URL}/api/products`, { headers, params })
      .pipe(
        map((data: any) => {
          console.log('product data :', data);
          return findProductByCategorySuccess({ payload: data });
        }),
        catchError((error: any) => {
          console.error('error', error);

          return of(
            findProductByCategoryFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  //   find product by id
  findProductsById(productId: any) {
    const headers = this.getHeader();
    return this.http
      .get(`${BASE_API_URL}/api/products/id/${productId}`, { headers })
      .pipe(
        map((data: any) => {
          console.log('product details through id:', data);
          return findProductByIdSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            findProductByIdFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
