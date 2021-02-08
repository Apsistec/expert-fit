import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  yearDate: any = Date.now();
  user: User;

  constructor(
    public authService: AuthService,

  ) {}

  ngOnInit() {
  }
}
