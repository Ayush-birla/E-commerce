import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {

  constructor(private router:Router){}

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`/order/${id}`])
  }

  orderFilter = [
    {
      value: 'on the way',
      label: 'On The Way',
    },
    {
      value: 'delivered',
      label: 'Deliverd',
    },
    {
      value: 'cancelled',
      label: 'Cancelled',
    },
    {
      value: 'returened',
      label: 'Returened',
    },
  ];
  orders = [
    [1, 1],
    [1, 1, 1],
  ];
}
