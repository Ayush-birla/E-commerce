import { Component } from '@angular/core';
import { men_jeans } from '../../../../../ecommerce-products-data-master/Men/men_jeans';
import { gounsPage1 } from '../../../../../ecommerce-products-data-master/Gouns/gouns';
import { mens_kurta } from '../../../../../ecommerce-products-data-master/Men/men_kurta';
import { lehngacholiPage2 } from '../../../../../ecommerce-products-data-master/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from '../../../../../ecommerce-products-data-master/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
mensJeans: any;
womenGounns:any;
lehngaCholi:any;
mensKurta:any;
mensShoes:any;

ngOnInit(){
  this.mensJeans=men_jeans.slice(0,5);
  this.womenGounns=gounsPage1.slice(0,5);
  this.lehngaCholi=lehngacholiPage2.slice(0,5);
  this.mensShoes=mensShoesPage1.slice(0,5);
  this.mensKurta=mens_kurta.slice(0,5);
}

}
