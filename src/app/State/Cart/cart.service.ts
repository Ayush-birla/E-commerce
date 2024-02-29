import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { BASE_API_URL } from '../../Config/api';
import {
  addItemToCartFailure,
  addItemToCartSuccess,
  getCartFailure,
  getCartSuccess,
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

 /*  getCart() {
    const url = `${this.API}/api/cart/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get(url, { headers })
      .pipe(
        map((data: any) => {
          console.log('getting cart items :', data);
          return getCartSuccess({ payload: data });
        }),
        catchError((error: any) => {
          console.log('errors :', error);

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
  } */

  getCart() {
    const url = `${this.API}/api/cart/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
  
    return this.http.get(url, { headers }).pipe(
      map((data: any) => {
        console.log('getting cart items :', data);
        return getCartSuccess({ payload: data });
      }),
      catchError((error: any) => {
        console.log('errors :', error);
  
        return of(
          getCartFailure(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      })
    );
  }
  

  removeCartItem(cartItemId: Number) {
    const url = `${this.API}/api/cart_item/${cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
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

  /* updateCartItem(reqData: any) {
    console.log("req data ",reqData);
    
    const url = `${this.API}/api/cart_item/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
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
      // .subscribe((actions) => this.store.dispatch(actions));
  } */

  updateCartItem(reqData: any) {
    console.log("req data ", reqData);
  
    const url = `${this.API}/api/cart_item/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
  
    return this.http.put(url, reqData.data, { headers }).pipe(
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
    );
  }
  
}
