
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

// import * as Color from 'color';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private storage: StorageService,
    private rendererFactory: RendererFactory2
  ) {
    this.storage.get('theme').then((theme) => {
      this.renderer.addClass(this.document.body, theme);
    });

    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
    this.storage.setItem('theme', 'dark-theme');
  }
  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.storage.setItem('theme', null);
  }
}
