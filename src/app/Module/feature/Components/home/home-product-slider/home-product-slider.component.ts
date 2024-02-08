import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-slider',
  templateUrl: './home-product-slider.component.html',
  styleUrl: './home-product-slider.component.scss'
})
export class HomeProductSliderComponent {

  @Input() title:any;
  @Input() products:any;


}
