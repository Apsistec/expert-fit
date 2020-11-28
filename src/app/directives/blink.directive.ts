import { Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { merge, Observable, timer } from 'rxjs';
import { mapTo, takeWhile, mergeAll } from 'rxjs/operators';

@Directive({
  selector: '[appBlink]'
})

export class BlinkDirective implements OnInit, OnDestroy {

  private blinker$: Observable<string>;
  private active = true;

  @HostBinding('style.visibility') visibility: string;

  constructor() {
    const show$ = timer(250, 500);
    const hide$ = timer(750, 1000);

    this.blinker$ = merge(
      show$.pipe(mapTo('visible')),
      hide$.pipe(mapTo('hidden'))
    );
  }

  ngOnInit() {
    this.blinker$.pipe(
      takeWhile(() => this.active))
      .subscribe((newVisiblity: string) => this.visibility = newVisiblity);
  }

  ngOnDestroy() {
    this.active = false;
  }

}
