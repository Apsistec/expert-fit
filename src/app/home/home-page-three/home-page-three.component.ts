import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonSlides } from '@ionic/angular';
import { Phases } from '../../models/phases.model';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html',
  styleUrls: ['./home-page-three.component.scss'],
})
export class HomePageThreeComponent implements OnInit, AfterViewInit {

  phases = Phases;
  @ViewChild('mySlider') slider: IonSlides;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  slideOpts;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.slideOpts = {
      speed: 1600,
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      watchSlidesProgress: true,
      spaceBetween: 600,
      centeredSlides: true,

    };
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  scrollToLabel(label) {
    const section = document.getElementById(label);
    this.content.scrollToPoint(0, section.offsetTop, 750);
  }
}
