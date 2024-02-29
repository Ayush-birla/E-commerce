import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { BASE_API_URL } from '../../Config/api';
import {
  createPaymentFailure,
  createPaymentSuccess,
  updatePaymentFailure,
  updatePaymentSuccess,
} from './payment.action';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private API = BASE_API_URL;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createPayment(orderId: any) {
    const url = `${this.API}/api/payments/${orderId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .post(url, {}, { headers })
      .pipe(
        map((data: any) => {
          console.log('created payment link :', data);
          if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
          }
          return createPaymentSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            createPaymentFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  updatePayment(reqData: any) {
    const url = `${this.API}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`;
    console.log('update payment data ',reqData);
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .get(url, { headers })
      .pipe(
        map((data: any) => {
          console.log('update payment :', data);

          return updatePaymentSuccess({ payload: data });
        }),
        catchError((error: any) => {
          console.log('Error in payment update',error);
          
          return of(
            updatePaymentFailure(
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
