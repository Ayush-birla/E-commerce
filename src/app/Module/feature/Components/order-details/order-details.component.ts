import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
Orders=[1,1,1];
steps=[
  {id:0,title:"Placed",isCompleted:true},
  {id:0,title:"Confirmed",isCompleted:false},
  {id:0,title:"Shipped",isCompleted:true},
  {id:0,title:"Delivered",isCompleted:false},

]
}
