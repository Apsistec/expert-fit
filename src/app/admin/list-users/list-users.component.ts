import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  userData: any;

  constructor(public apiService: ApiService) {
    this.userData = [];
  }
  ngOnInit()
  {}
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllUsers();
  }

  getAllUsers() {
    // Get saved list of user
    this.apiService.getList().subscribe((response) => {
      console.log('apiResponse: ', response);
      this.userData = response;
    });
  }

  delete(item) {
    // Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe((Response) => {
      // Update list after delete is successful
      this.getAllUsers();
    });
  }
}
