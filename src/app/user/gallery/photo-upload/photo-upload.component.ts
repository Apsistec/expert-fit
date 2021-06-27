import { ImageCroppedEvent } from 'ngx-image-cropper';

import { Component, OnInit } from '@angular/core';

import { FirebaseUploadService } from '../../../services/firebase-upload.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {
  barStatus = false;
  imageUploads = [];

  title = 'angular-image-uploader';

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private firebaseUploadService: FirebaseUploadService) {}

  ngOnInit() {}

  // Upload image action
  uploadPhoto(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          console.log(res);
          this.imageUploads.unshift(res);
          this.barStatus = false;
        }
      },
      (error: any) => {
        this.barStatus = false;
      }
    );
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
