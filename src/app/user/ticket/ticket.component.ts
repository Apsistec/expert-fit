import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavController, NavParams } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  ticketForm: FormGroup;
  id = null;
  userId = ''; //  user= '';
  subs: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private ticketService: TicketService,
    private navParam: NavParams,
    public authService: AuthService,
    private navController: NavController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      status: 0
    });

    this.id = this.navParam.get('id');
    if (this.id) {
      this.ticketService.getTicket(this.id).subscribe((ticket) => {
        this.ticketForm.patchValue({
          title: ticket['title'],
          desc: ticket['desc'],
          status: ticket['status']
        });

        // this.ticketForm.controls['title'].disable();
        // this.ticketForm.controls['desc'].disable();
        this.ticketService.getUser(
          ticket['creator'].subscribe((user) => {
            this.userId = user.uid; //  user.email;
          })
        );
      });
    }
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.navController.back();
    });
  }

  async saveOrUpdate() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    this.ticketService.createOrUpdateTicket(this.id, this.ticketForm.value).then(
      () => {
        loading.dismiss();
        this.dismissModal();
      },
      (error) => {
        loading.dismiss();
        this.messageService.errorAlert(error);
      }
    );
  }

  deleteTicket() {
    this.ticketService.deleteTicket(this.id).then(() => {
      this.dismissModal();
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
