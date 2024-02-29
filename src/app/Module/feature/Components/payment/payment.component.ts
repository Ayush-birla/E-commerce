import { Component } from '@angular/core';
import { CartService } from '../../../../State/Cart/cart.service';
import { OrderServie } from '../../../../State/Order/order.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../../State/Payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  order: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderServie,
    private store: Store<AppState>,
    private paymentService:PaymentService
    ) {}
    
    ngOnInit() {
   
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id ', id);
    
    this.orderService.getOrderById(id);
    
    this.store.pipe(select((store) => store.order)).subscribe((order) => {
      this.order = order.order;
      console.log('price ',this.order.totalPrice );
    });
  }

  redirectToPayment() {
    this.paymentService.createPayment(this.order.id)
  }
}
