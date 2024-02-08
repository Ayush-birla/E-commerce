import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
@Input() showButton: any;

removeCartItem() {
  console.log('Remove cart item');
  
}
  updateCartItem(num: Number) {
    console.log(num);
  }
}
