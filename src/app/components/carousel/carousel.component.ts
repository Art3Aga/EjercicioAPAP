
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Advertisements } from 'src/app/models/Advertisements';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() advertisements: Advertisements[];
  images: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    animateIn: true,
    autoplay: true,
    autoWidth: true,
    autoHeight: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
