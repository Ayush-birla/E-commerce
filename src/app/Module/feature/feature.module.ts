import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './Components/cart/cart.component';
import { AddressFormComponent } from './Components/checkout/address-form/address-form.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { FeatureComponent } from './Components/feature.component';
import { CarouselComponent } from './Components/home/carousel/carousel.component';
import { HomeProductCardComponent } from './Components/home/home-product-card/home-product-card.component';
import { HomeProductSliderComponent } from './Components/home/home-product-slider/home-product-slider.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { OrderComponent } from './Components/order/order.component';
import { PaymentSuccessComponent } from './Components/payment-success/payment-success.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductReviewCardComponent } from './Components/product-details/product-review-card/product-review-card.component';
import { ProductsComponent } from './Components/products/products.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OrderCardComponent } from './Components/order/order-card/order-card.component';
// import {ReactiveFormsModule ,FormsModule} from '@angular/forms';









@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    CarouselComponent,
    HomeProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent

  ]
})
export class FeatureModule { }
