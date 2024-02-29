import { Component } from '@angular/core';
import { mensPantsPage1 } from '../../../../../ecommerce-products-data-master/pants/men_page1';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProduceService } from '../../../../State/Product/product.service';
import { log } from 'console';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { CartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews = [1, 1, 1];
  relatedProducts: any;
  productDetail: any;
  productId: any;

  constructor(
    private router: Router,
    private productService: ProduceService,
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.relatedProducts = mensPantsPage1;
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.findProductsById(id);
    this.productId = id;

    this.store.pipe(select((store) => store.product)).subscribe((prduct) => {
      this.productDetail = prduct.product;
      console.log('id ', id);
      console.log('store data', this.productDetail);
    });
  }
  handleAddToCart() {
    console.log('selected size : ', this.selectedSize);
    const data = { size: this.selectedSize, productId: this.productId };
    this.cartService.addItemToCart(data);
    this.router.navigate(['cart']);
  }
}
