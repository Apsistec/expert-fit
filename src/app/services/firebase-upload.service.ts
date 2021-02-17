import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploadService {
  location = 'uploads/';
  constructor(private angularFireStorage: AngularFireStorage) {}

  /* Image name generator time */
  imageName() {
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
  }

  async storeImage(imageData: any) {
    try {
      const imageName = this.imageName();
      return new Promise((resolve, reject) => {
        const pictureRef = this.angularFireStorage.ref(this.location + imageName);
        pictureRef
          .put(imageData)
          .then(() => {
            pictureRef.getDownloadURL().subscribe((url: any) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (e) {}
  }
}
