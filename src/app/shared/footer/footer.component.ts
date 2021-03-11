import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';

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
