import { Component } from '@angular/core';
import { OrderServie } from '../../../../State/Order/order.service';
import { PaymentService } from '../../../../State/Payment/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent {
  orderId: any;
  private paymentId: any;
   order: any;
  constructor(
    private orderService: OrderServie,
    private paymentServic: PaymentService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.orderId = params['order_id'];
      this.paymentId = params['razorpay_payment_id'];
    });
    this.orderService.getOrderById(this.orderId);
    this.paymentServic.updatePayment({
      orderId:this.orderId,
      paymentId:this.paymentId
    })
    this.store.pipe(select((store) => store.order)).subscribe((order) => {
      this.order = order.order;
    });
    console.log(this.order);
    
  }
}
