import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarContentComponent } from './Components/navbar/navbar-content/navbar-content.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { CartItemComponent } from './Components/cart-item/cart-item.component';
import { AddressCardComponent } from './Components/address-card/address-card.component';
import { OrderTrackerComponent } from './Components/order-tracker/order-tracker.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule ,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ]
})
export class SharedModule { }
