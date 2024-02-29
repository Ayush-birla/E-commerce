import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AdminModule } from './Module/admin/admin.module';
import { AuthModule } from './Module/auth/auth.module';
import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { authReducer } from './State/Auth/auth.reducer';
import { orderReducer } from './State/Order/order.reduce';
import { productReducer } from './State/Product/product.reducer';
import { userReducer } from './State/User/user.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product: productReducer,
      order: orderReducer,
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
