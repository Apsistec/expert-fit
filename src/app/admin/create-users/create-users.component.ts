
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/users.model';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss'],
})
export class CreateUsersComponent implements OnInit {
    data: User;

    constructor(public apiService: ApiService, public router: Router) {
      // this.data = new User();
    }

    ngOnInit() {}

    submitForm() {
      this.apiService.createItem(this.data).subscribe((response) => {
        this.router.navigate(['list-user']);
      });
    }
  }
