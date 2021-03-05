import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { AuthService } from '../../services/auth.service';
import { CollectionService } from '../../services/collection.service';
import { TicketService } from '../../services/ticket.service';
import { TicketComponent } from '../../shared/ticket/ticket.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  tickets: Observable<any>;
  title = 'Admin Dashboard';
  admins;
  users;
  customers;
  feed;
  employees;

  constructor(
    public authService: AuthService,
    private ticket: TicketService,
    private modalController: ModalController,
    private collection: CollectionService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.users = this.collection.getUsers();
    this.customers = this.collection.getCurrentCustomers();
    this.employees = this.collection.getEmployees();
    this.tickets = this.ticket.getAdminTickets();
  }

  async openTicket(id) {
    const modal = await this.modalController.create({
      component: TicketComponent,
      componentProps: {
        id,
      },
    });
    modal.present()
    .catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }
}
