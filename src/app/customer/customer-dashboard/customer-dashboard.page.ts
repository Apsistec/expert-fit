import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss']
})
export class CustomerDashboardPage implements OnInit {
  constructor(
    public storage: StorageService,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit() {}
}
