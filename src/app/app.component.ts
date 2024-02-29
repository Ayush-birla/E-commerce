import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { CartService } from './State/Cart/cart.service';
import { UserService } from './State/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'E-commerce';
  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      this.userService.getUserProfile();
      //  this.cartService.getCart();
    }
    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
      this.cartService.getCart();
      // console.log('user profile ', this.store);
      console.log('storee : ',user);
      
    });
    // }
    this.store.pipe(select((store)=>store.cart)).subscribe((cart)=>{
      console.log('ccaarrt :',cart);
      
    })
  }
}
