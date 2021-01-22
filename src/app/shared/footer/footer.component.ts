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
  chooser;
  user: Observable<User>;
  constructor(private router: Router) {}

  ngOnInit() {
    this.chooser = this.router.url === '/testimonials' ? 'benefits' : 'ratings';
  }

 }
