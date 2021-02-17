import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.user = this.authService.getUser();
  }

  logoutAction() {
    this.authService.signOut();
  }
}
