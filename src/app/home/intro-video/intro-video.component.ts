import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent, ModalController } from '@ionic/angular';
import { SeoService } from '../../services/seo.service';


@Component({
  selector: 'app-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.scss'],
})
export class IntroVideoComponent implements OnInit {

 titleId = 'Expert Fitness Home';
  core;

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
    video;
  trustedVideoUrl4: SafeResourceUrl;
  video4: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
  };

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    private seo: SeoService,
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This is the landing page for new visitors and those who are interested in learning more about Expert Fitness',
        '../../../assets/logos/logo.png'
      );
    }

  ngOnInit() {
      this.video = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/JrqXsZX1xgk');
  }


    dismissModal() {
        this.modalController.dismiss();
    }

}
