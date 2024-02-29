import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { CartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: any;
  cartItem:any;
  constructor(
    private router: Router,
    private cartService: CartService,
    private store: Store<AppState>
  ) {}

  navigateToCheckOut() {
    this.router.navigate(['checkout']);
  }

  ngOnInit() {
   /*  console.log('cart item started ');
    this.cartService.getCart();
    this.store.pipe(select((store) => store.cart)).subscribe((cart) => {
      console.log('ccc ',cart.discount);
      this.cartItems =  cart
      console.log('cart item data ', this.cartItems);
    }); */
 
    console.log('cart item started ');

  this.cartService.getCart().subscribe(
    (cartData) => {
      console.log('Cart data received:', cartData);
      this.cartItems=cartData;
      this.cartItem=this.cartItems.payload.cartItem
      console.log('Cart data received11:', this.cartItems.payload.cartItem);
      // Dispatch the action or update the component's state as needed
    },
    (error) => {
      console.error('Error fetching cart:', error);
      // Handle the error appropriately
    }
  );
  }

  cart = [1, 1, 1];
}
