import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  tickets: Observable<any>;
  title = 'Admin Dashboard';
  admins;
  users;
  customers;
  feed;
  employees;

  constructor(public authService: AuthService, private collection: CollectionService) {}

  ngOnInit() {
    this.users = this.collection.getUsers();
    this.customers = this.collection.getCurrentCustomers();
    this.employees = this.collection.getEmployees();
  }
}
