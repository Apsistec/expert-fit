import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Benefits } from 'src/app/models/training-benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit, AfterViewInit {

benefits =  Benefits;
 @ViewChild('mySlider') slider: IonSlides;

  slideOpts;

  constructor( private router: Router ) { }

    ngOnInit() {}

  ngAfterViewInit() {
    if (this.router.url === '/testimonials') {
        this.slideOpts = {
            initialSlide: 1,
            speed: 600,
            loop: true,
            slidesPerView: 1
        };
    } else {
        this.slideOpts = {
            initialSlide: 1,
            speed: 600,
            loop: true,

            breakpoints: {
                350: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
            }
        };
    }
  }


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}