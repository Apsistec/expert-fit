import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageCropperModule } from 'ngx-image-cropper';

import { SharedModule } from '../../shared/shared.module';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { GalleryPageRoutingModule } from './gallery-routing.module';
import { GalleryPage } from './gallery.page';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    ImageCropperModule,
    IonicModule,
    GalleryPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [GalleryPage, FileUploaderComponent, ImageUploadComponent, PhotoUploadComponent, PhotosListComponent]
})
export class GalleryPageModule {}
