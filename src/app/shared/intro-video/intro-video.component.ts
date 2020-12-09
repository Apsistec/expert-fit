import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.scss'],
})
export class VideoComponent implements OnInit {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId = 'What Is Expert Fitness?';

  trustedVideoUrl: SafeResourceUrl;
  video;

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    private seo: SeoService,
    private router: Router
  ) {
    this.seo.addTwitterCard(
      this.titleId,
      'This is the landing page for new visitors and those who are interested in learning more about Expert Fitness',
      '../../../assets/logos/logo.png'
    );
  }

  ngOnInit() {
    this.video = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/JrqXsZX1xgk'
    );
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
