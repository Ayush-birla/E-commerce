import { Component, Input } from '@angular/core';
import { CartService } from '../../../../State/Cart/cart.service';
import { error, log } from 'console';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() showButton: any;
  @Input() items: any;

  constructor(private cartService: CartService) {}
  ngOnInit() {
    console.log('carttttt iiiteeem ,', this.items);
  }

  removeCartItem() {
    console.log('Remove cart item');
    this.cartService.removeCartItem(this.items.id)
  }
  updateCartItem(num: Number) {
    this.cartService.updateCartItem({
      cartItemId: this.items.id,
      data: { quantity: num+this.items.quantity }
    }).subscribe((cartItem)=>{
      console.log(cartItem);
    },
    (error)=>{
      console.log(error);
      
    })
    console.log(num+this.items.quantity);
  }
}
