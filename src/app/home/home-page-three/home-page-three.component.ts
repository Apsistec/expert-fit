import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Phases } from 'src/app/models/phases.model';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html',
  styleUrls: ['./home-page-three.component.scss'],
})
export class HomePageThreeComponent implements OnInit, AfterViewInit {

  phases = Phases;
  @ViewChild('mySlider') slider: IonSlides;

  slideOpts;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.slideOpts = {
      initialSlide: 4,
      speed: 1600,
      loop: true,
      slidesPerView: 1,
      grabCursor: true,


    };
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
