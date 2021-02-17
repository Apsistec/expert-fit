import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/users.model';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  user: User;
  constructor(
    public storage: StorageService,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit() {}



  onSignOut() {
    console.log('Sign-out successful!');
  }

  onAccountDeleted() {
    console.log('Account Delete successful!');
  }

  createAccount() {
    console.log('create account has beeen requested');
  }

}
