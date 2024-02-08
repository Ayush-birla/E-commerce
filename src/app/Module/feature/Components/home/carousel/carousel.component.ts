import { Component, NgZone } from '@angular/core';
import { homeCarouselData } from '../../../../../../ecommerce-products-data-master/mainCarousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{
  currentSlide = 0;
  interval: any;
  carouselData: any;

  ngOnInit(): void {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }
  

  nextSlide() {
    // console.log(this.currentSlide);
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
    // console.log(this.currentSlide);
  }

  // autoPlay() {
  //   console.log('Autoplay started');
  //   this.interval = setInterval(() => {
  //     console.log('Next slide');
  //     this.nextSlide();
  //   }, 2000);
  // }


constructor(private zone: NgZone) {}

// ...

autoPlay() {
  this.zone.runOutsideAngular(() => {
    this.interval = setInterval(() => {
      this.zone.run(() => {
        this.nextSlide();
      });
    }, 2000);
  });
}

  
}

