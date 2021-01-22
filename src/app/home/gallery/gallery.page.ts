import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    // await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.storeImage();
  }

}
