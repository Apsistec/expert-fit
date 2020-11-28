import { Directive, OnInit, Input, HostListener } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective implements OnInit {

  @Input('appFadeHeader') toolbar: any;

  constructor(
    private domCtrl: DomController
  ) {}

  ngOnInit(): void {
    this.toolbar = this.toolbar.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    let distance = $event.detail.scrollTop;
    if (distance >= 255) {
      distance = 255;
    }
    const hexDist = distance.toString(16);

    this.domCtrl.write(() => {
      this.toolbar.style.setProperty('--background', `#f4f5f8${hexDist}`);
    });
  }
}
