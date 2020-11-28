import { Injectable } from '@angular/core';
import {
    CameraPhoto, CameraResultType, CameraSource, Plugins
} from '@capacitor/core';
import { MessageService } from './message.service';

const { Camera, Filesystem, Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private messageService: MessageService) {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    }).catch((err) => this.messageService.errorAlert(JSON.stringify(err)));

  }
}
