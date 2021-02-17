import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from './../../services/firebase-upload.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {
  barStatus = false;
  imageUploads = [];
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
}
