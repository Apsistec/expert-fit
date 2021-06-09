import { WizardComponent } from 'angular-archwizard';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

import { environment } from '../../../environments/environment';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

declare let Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;

  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  card;
  user: User;
  // stripe;
  stripe: stripe.Stripe;
  cardErrors;

  constructor(public functions: AngularFireFunctions, public authService: AuthService) {}

  ngOnInit() {
    if (!this.user.uid) {
      this.wizard.goToStep(0);
    } else {
      this.wizard.goToStep(1);
    }

    this.stripe = Stripe(environment.STRIPE_PUBLISHABLE_KEY);
    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#227733',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#121212'
        }
      },
      invalid: {
        color: '#f73008',
        iconColor: '#f73008'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }
}
