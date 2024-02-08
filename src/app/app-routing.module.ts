import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/Components/home/home.component';
import { ProductsComponent } from './Module/feature/Components/products/products.component';
import { CartComponent } from './Module/feature/Components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feature/Components/product-details/product-details.component';
import { CheckoutComponent } from './Module/feature/Components/checkout/checkout.component';
import { PaymentComponent } from './Module/feature/Components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/Components/payment-success/payment-success.component';
import { OrderComponent } from './Module/feature/Components/order/order.component';
import { OrderDetailsComponent } from './Module/feature/Components/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';

const routes: Routes = [

  // set all the router of our project
  {path:"",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"checkout/payment/:id",component:PaymentComponent},
  {path:":lavelOne/:levelTwo/:levelThree",component:ProductsComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"account/order",component:OrderComponent},
  {path:"order/:id",component:OrderDetailsComponent},
  // jo bhi is routing pr routes define kre hai vo execute honge that's why we have used this
  {path:"admin",loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>AdminRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
