import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Router } from 'express';
import { catchError, map, of } from 'rxjs';
import { BASE_API_URL } from '../../Config/api';
import {
    addItemToCartFailure,
    addItemToCartSuccess,
    getCartFailure,
    getCartsuccess,
    removeCartItemFailure,
    removeCartItemSuccess,
    updateCartItemFailure,
    updateCartItemSuccess,
} from './cart.action';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private API = BASE_API_URL;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addItemToCart(reqData: any) {
    const url = `${this.API}/api/cart/add`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .put(url, reqData, { headers })
      .pipe(
        map((data: any) => {
          console.log('data :', data);

          return addItemToCartSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            addItemToCartFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getCartItem() {
    const url = `${this.API}/api/cart/`;
    const headers = new HttpHeaders({
      Athorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application.json',
    });
    return this.http
      .get(url, { headers })
      .pipe(
        map((data: any) => {
          console.log('carte items :', data);
          return getCartsuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            getCartFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((actions) => this.store.dispatch(actions));
  }

  removeCartItem(cartItemId: Number) {
    const url = `${this.API}/api/cart_items/${cartItemId}`;
    const headers = new HttpHeaders({
      Athorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application.json',
    });
    return this.http
      .delete(url, { headers })
      .pipe(
        map((data: any) => {
          console.log('deleted items :', data);
          return removeCartItemSuccess({ cartItemId });
        }),
        catchError((error: any) => {
          return of(
            removeCartItemFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((actions) => this.store.dispatch(actions));
  }

  updateCartItem(reqData: any) {
    const url = `${this.API}/api/cart_items/${reqData.cartItemId()}`;
    const headers = new HttpHeaders({
      Athorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application.json',
    });
    return this.http
      .put(url, reqData.data, { headers })
      .pipe(
        map((data: any) => {
          console.log('update items :', data);
          return updateCartItemSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            updateCartItemFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((actions) => this.store.dispatch(actions));
  }
}
