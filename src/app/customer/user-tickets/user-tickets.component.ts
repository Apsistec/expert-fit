import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { TicketComponent } from '../../shared/ticket/ticket.component';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit {
  tickets: Observable<any>;
  title = 'User Dashboard';
  constructor(
    public authService: AuthService,
    private modalController: ModalController,
    private ticket: TicketService
  ) {}

  ngOnInit() {
    this.tickets = this.ticket.getUserTickets();
  }

  async openTicketModal() {
    const modal = await this.modalController.create({
      component: TicketComponent
    });
    await modal.present();
  }

}
