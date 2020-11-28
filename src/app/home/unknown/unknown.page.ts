import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.page.html',
  styleUrls: ['./unknown.page.scss'],
})
export class UnknownPage {
  constructor(private router: Router) {}
}
