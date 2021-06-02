import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss']
})
export class StudentCreatePage implements OnInit, OnDestroy {
  data: Student;
  subs: Subscription = new Subscription();
  constructor(public apiService: ApiService, public router: Router) {
    this.data = new Student();
  }

  ngOnInit() {}

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['/admin/student-list']);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
