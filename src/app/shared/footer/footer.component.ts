import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearDate: any = Date.now();
  ratings: boolean;
  user: Observable<User>;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('url: ', this.router.url);
    this.ratings = this.router.url === '/home/reviews' ? false : true;
  }

 }
