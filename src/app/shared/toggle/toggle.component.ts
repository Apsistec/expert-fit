import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  themeState;
  checked;
  prefersDark;
  toggle;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.toggle = document.getElementById('toggle');
    this.toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', ev.detail.checked);
    });

    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.prefersDark.addEventListener('change', (e) => this.checkToggle(e.matches));
    this.checkToggle(this.prefersDark.matches);
  }

  loadApp() {}

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  checkToggle(shouldCheck) {
    this.checked = shouldCheck;
  }
}
