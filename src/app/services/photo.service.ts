import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE = 'photos';
  capturedPhoto;

  constructor(
    private messageService: MessageService,
    private platform: Platform,
    private storage: AngularFireStorage
    ) {}

    storeImage() {
      const newName = `${new Date().getTime()}-PICTURE.png`;
      const storageRef: AngularFireStorageReference = this.storage.ref(`/images/${newName}`);
      const storageObs = from(storageRef.putString(this.capturedPhoto, 'base64', { contentType: 'image/png' }));
      return storageObs.pipe(
        switchMap((obj) => {
          return obj.ref.getDownloadURL();
        }),
        map((url) => {
          console.log('my url: ', url);
          return url;
        })
      );
    }




  public async addNewToGallery() {
    // Take a photo
    this.capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: this.capturedPhoto.webPath
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(this.capturedPhoto);
    this.photos.unshift(savedImageFile);
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // tslint:disable-next-line: no-non-null-assertion
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  })

  private async savePicture(cameraPhoto: CameraPhoto) {
    // Angular Storage
    this.storeImage();

    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);
    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath,
    };
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];
    // Display the photo by reading into base64 format
    // tslint:disable-next-line: prefer-const
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}

export interface Photo {
  filepath: string;
  webviewPath: string;
}
