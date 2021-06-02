import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark) {
      document.body.classList.toggle('dark', true);
    }
  }

  enableDark() {
    document.body.classList.toggle('dark', true);
  }

  enableLight() {
    document.body.classList.toggle('dark', false);
  }
}
