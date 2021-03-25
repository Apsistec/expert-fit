import { Observable } from 'rxjs';

import { Component } from '@angular/core';

import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  yearDate: any = Date.now();

  user: Observable<User>;
  constructor(public authService: AuthService) {}


}
