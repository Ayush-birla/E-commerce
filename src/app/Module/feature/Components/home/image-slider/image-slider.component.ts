import { Component, OnInit,NgZone } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  currentSlideIndex = 0;
  interval:any;
  images: string[] = [
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_7.jpg',
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/3/13_6.jpg',
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_mob_1.jpg',
    // Add more image URLs as needed
  ];

  ngOnInit(): void {
    // this.startAutoPlay();
    this.autoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  startAutoPlay(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Change the interval as needed
  }

  stopAutoPlay(): void {
    // Implement logic to stop auto play if needed
  }
  
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
