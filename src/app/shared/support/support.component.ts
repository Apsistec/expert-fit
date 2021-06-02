import { MessageService } from 'src/app/services/message.service';
import { TicketService } from 'src/app/services/ticket.service';

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  tickets;

  constructor(
    private ticketService: TicketService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.tickets = this.ticketService.getAdminTickets();
  }

  async openTicket(id) {
    const modal = await this.modalController.create({
      component: TicketComponent,
      componentProps: {
        id
      }
    });
    modal.present().catch((error) => {
      this.modalController.dismiss();
      return this.messageService.errorAlert(error);
    });
  }
}
