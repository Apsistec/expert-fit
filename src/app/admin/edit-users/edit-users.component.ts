import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/users.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {

    id: number;
    data: User;

    constructor(
      public activatedRoute: ActivatedRoute,
      public router: Router,
      public apiService: ApiService
      ) {
        // const data = new User();
    }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      // get item details using id
      this.apiService.getItem(this.id).subscribe((response) => {
        console.log(response);
        this.data = response;
      });
    }

    update() {
      // Update item by taking id and updated data object
      this.apiService.updateItem(this.id, this.data).subscribe((response) => {
        this.router.navigate(['list-user']);
      });
    }
  }
