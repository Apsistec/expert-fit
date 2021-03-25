/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonSlides } from '@ionic/angular';

import { Phases } from '../../models/phases.model';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html',
  styleUrls: ['./home-page-three.component.scss']
})
export class HomePageThreeComponent implements OnInit, AfterViewInit {
  phases; // = Phases;
  @ViewChild('mySlider') slider: IonSlides;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  slideOpts;

  constructor(private router: Router) {}

  ngOnInit() {
    this.phases = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: Phases
    };
    this.phases.slideItems = Phases;
  }

  ngAfterViewInit() {
    this.slideOpts = {
      on: {
        beforeInit() {
          const swiper = this;
          swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
          const overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
          };
          swiper.params = Object.assign(swiper.params, overwriteParams);
          swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
        },
        setTranslate() {
          const swiper = this;
          const { $, slides, rtlTranslate: rtl } = swiper;
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) {
              progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            }
            const offset$$1 = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = -offset$$1;
            let ty = 0;
            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
              rotateX = -rotateY;
              rotateY = 0;
            } else if (rtl) {
              rotateY = -rotateY;
            }

            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

            if (swiper.params.flipEffect.slideShadows) {
              // Set shadows
              let shadowBefore = swiper.isHorizontal()
                ? $slideEl.find('.swiper-slide-shadow-left')
                : $slideEl.find('.swiper-slide-shadow-top');
              let shadowAfter = swiper.isHorizontal()
                ? $slideEl.find('.swiper-slide-shadow-right')
                : $slideEl.find('.swiper-slide-shadow-bottom');
              if (shadowBefore.length === 0) {
                shadowBefore = swiper.$(
                  `<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`
                );
                $slideEl.append(shadowBefore);
              }
              if (shadowAfter.length === 0) {
                shadowAfter = swiper.$(
                  `<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`
                );
                $slideEl.append(shadowAfter);
              }
              if (shadowBefore.length) {shadowBefore[0].style.opacity = Math.max(-progress, 0);}
              if (shadowAfter.length) {shadowAfter[0].style.opacity = Math.max(progress, 0);}
            }
            $slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
          }
        },
        setTransition(duration) {
          const swiper = this;
          const { slides, activeIndex, $wrapperEl } = swiper;
          slides
            .transition(duration)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(duration);
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            // eslint-disable-next-line
            slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
              if (eventTriggered) {return;}
              if (!swiper || swiper.destroyed) {return;}

              eventTriggered = true;
              swiper.animating = false;
              const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        }
      }
    };
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  //Move to Next slide
  slideNext(slides) {
    slides.slideNext(500);
  }

  //Move to previous slide
  slidePrev(slides) {
    slides.slidePrev(500);
  }

  scrollToLabel(label) {
    const section = document.getElementById(label);
    this.content.scrollToPoint(0, section.offsetTop, 750);
  }
}
