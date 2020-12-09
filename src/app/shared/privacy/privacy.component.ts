import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
