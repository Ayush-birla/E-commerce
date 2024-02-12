import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import {
  createOrderFailure,
  createOrderSuccess,
  getOrderByIdFailure,
  getOrderByIdSuccess,
  getOrderHistoryFailure,
  getOrderHistorySuccess,
} from './order.action';
import { error } from 'console';
import { animate } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class OrderServie {
  private API = BASE_API_URL;
  private headers;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });
  }
  createOrder(reqData: any) {
    console.log('create Order :', reqData);
    const url = `${this.API}/api/orders/`;

    return this.http
      .post(url, reqData, { headers: this.headers })
      .pipe(
        map((data: any) => {
          console.log('created order :', data);
          if (data.id) {
            this.router.navigate([`/checkout/payment/${data.id}`], {
              queryParams: { step: '3', order_id: data.id },
            });
          }
          console.log('created order :', data);
          return createOrderSuccess({ order: data });
        }),
        catchError((error: any) => {
          console.log('catch error :', error);
          return of(
            createOrderFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getOrderById(orderId: any) {
    const url = `${this.API}/api/orders/${orderId}`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(
        map((data: any) => {
          console.log('order by id :', data);
          return getOrderByIdSuccess({ order: data });
        }),
        catchError((error: any) => {
          console.log(error);
          return of(
            getOrderByIdFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getOrderByHistory(orderId: any) {
    const url = `${this.API}/api/orders/user}`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(
        map((data: any) => {
          console.log('order history :', data);
          return getOrderHistorySuccess({ order: data });
        }),
        catchError((error: any) => {
          console.log('order history eroor : ', error);
          return of(
            getOrderHistoryFailure(
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
