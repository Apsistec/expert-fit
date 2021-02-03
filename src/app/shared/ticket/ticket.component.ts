import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketForm: FormGroup;
  id = null;
  user = '';

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private ticket: TicketService,
    private navParam: NavParams,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      status: 0
    });

    this.id = this.navParam.get('id');
    if (this.id) {
      this.ticket.getTicket(this.id).subscribe((ticket) => {
        this.ticketForm.patchValue({
          title: ticket['title'],
          desc: ticket['desc'],
          status: ticket['status']
        });

        // this.ticketForm.controls['title'].disable();
        // this.ticketForm.controls['desc'].disable();

        this.ticket.getUser(
          ticket['creator'].subscribe((user) => {
            this.user = user.email;
          })
        );
      });
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async saveOrUpdate() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.ticket.createOrUpdateTicket(this.id, this.ticketForm.value).then(
      () => {
        loading.dismiss();
        this.dismissModal();
      },
      (err) => {
        loading.dismiss();
      }
    );
  }

  deleteTicket() {
    this.ticket.deleteTicket(this.id).then(() => {
      this.dismissModal();
    });
  }
}
