import { Component } from '@angular/core';
import { mensPantsPage1 } from '../../../../../ecommerce-products-data-master/pants/men_page1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  
selectedSize: any;
reviews= [1,1,1];
relatedProducts:any;

constructor(private router:Router){}
ngOnInit(){
  this.relatedProducts=mensPantsPage1;
}
handleAddToCart() {
  console.log('selected size : ',this.selectedSize);
  this.router.navigate(['cart'])
  
}


}
