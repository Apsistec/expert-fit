import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
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
