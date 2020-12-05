import {
    AfterViewInit, Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup } from '@angular/forms';
// import * as firebase from 'firebase/app';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import {
    ModalController, PopoverController
} from '@ionic/angular';
import { WizardComponent } from 'angular-archwizard';
import { environment } from '../../../environments/environment';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { SeoService } from '../../services/seo.service';
import { AboutAppComponent } from '../../shared/about-app/about-app.component';
import { PopoverComponent } from '../../shared/popover/popover.component';
import { PrivacyComponent } from '../../shared/privacy/privacy.component';
import { TermsComponent } from '../../shared/terms/terms.component';
import * as stripe from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit, AfterViewInit {
    stripe;
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;

  @ViewChild('card-payment') cardPayElement: stripe.StripeCardElement;
  @ViewChild('sections') photos: MatExpansionPanel;
  @ViewChild('info') info: MatExpansionPanel;
  @ViewChild('pay') pay: MatExpansionPanel;
  card;
  public done: boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegister = true;
  isLoggedIn = false;
  isLoading = false;
  showDetails: boolean;
  hideProduct: boolean;
  user: User;
  uid;
  userId;
  marked = false;
  theCheckbox = false;
  hide = true;
  source;
  amount = 0;
  planID;
  confirmation;
  confirmation0;
  cardErrors;
  btnOpts;
  onClose;

  constructor(
    public functions: AngularFireFunctions,
    public authService: AuthService,
    private analytics: AngularFireAnalytics,
    public modalController: ModalController,
    private messageService: MessageService,
    private popoverController: PopoverController,
    private seoService: SeoService,
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth
    ) {
      this.seoService.addTwitterCard(
        'Product and Subscription Purchase Page',
        'View and purchase Expert Fitness\' Subscriptions and other products at great prices',
        '..//..//..//assets//logos//logo.png'
      );
    }

  async ngOnInit(): Promise<void> {
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Nunito", Nunito, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: (window.innerWidth <= 500) ? '12px' : '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    this.stripe = await stripe.loadStripe(environment.stripePubKey);
    const elements = await this.stripe.elements();
    this.card = elements.create('card', {
      hidePostalCode: true,
      style
    });
    // this.authService.user$.pipe(map((user) => this.user = user));

    // this.resetVars();
    // this.checkboxStatus();
    // this.stepperProcess();
    return;
  }

  resetVars(): void {
    this.hide = true;
    this.showDetails = true;
  }

  // evaluate checkmark status
  checkboxStatus(): void {
    this.amount = this.theCheckbox ? +'5700' : +'000';
  }

  stepperProcess() {
    if (this.user && this.user.uid) {
      this.wizard.goToStep(1);
    } else {
      this.wizard.goToStep(0);
    }
  }

  firstStep() {
    this.wizard.goToStep(0);
  }

  nextStep() {
    this.wizard.goToStep(1);
  }

  // toggle checkmark status
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  async Login() {
    try {
      const res = await this.authService.SignIn(this.loginForm.value);
      this.nextStep();
      await this.messageService.loggedInToast(res);
    } catch (error) {
      this.messageService.errorAlert(error.message);
    }
  }

  async registerUser() {
    try {
      const res = await this.authService.SignUp(this.registerForm.value);
      this.nextStep();
      await this.messageService.registerSuccessAlert();
    } catch (error) {
      this.messageService.errorAlert(error.message);
    }
  }

  ngAfterViewInit() {
    this.resetVars();
    this.checkboxStatus();
    this.stepperProcess();

    this.info.close();
    this.pay.close();
    this.photos.open();
    setTimeout(() => {
      this.card.mount('#card-payment');
      this.card.focus();
      this.card.on('change', e => this.btnOpts.disabled = e.complete ? false : true);
    });
  }

  switchAuthMode() {
    this.isRegister = !this.isRegister;
  }

  async handleForm(e) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      this.cardErrors = error.message;
    } else {
      // Send the token to your server.
      this.isLoading = true;
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ source: source.id, uid: this.user.uid, plan: this.planID }).toPromise();
      this.isLoading = false;
      this.wizard.goToStep(2);
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser',
    });
    popover.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present()
    .catch((err) => {
      return this.messageService
      .errorAlert(err);
    });
  }

  async showModalAbout() {
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present()
    .catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}

// const body =
//   {
//     description: this.data.title,
//     amount: this.data.price * 100,
//     customer: this.user.stripeId,
//     receipt_email : this.userDoc.email,
//   }

//   this.setupIntent = await this.pmt.createSetupIntent();
//   this.paymentIntent = await this.pmt.createPaymentIntent(body);

//   }

  // Stripe Details
  // this.stripe = Stripe('pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA');
  // const elements = this.stripe.elements();
  // const style = {
    //   base: {
      //     color: 'var(--ion-color-secondary)',
    //     fontFamily: 'Montserrat, "Helvetica Neue", sans-serif',
    //     fontSmoothing: 'antialiased',
    //     fontSize: '1em',
    //     '::placeholder': {
      //       color: '#121212',
      //     },
  //   },
  //   invalid: {
    //     color: '#f73008',
    //     iconColor: '#f73008',
    //   },
    // };

    // // Create an instance of the card Element.
  // this.card = elements.create('card', { style });
  // this.card.mount(this.cardElement.nativeElement);
  // this.card.addEventListener('change', ({ error }) => {
    //   this.cardErrors = error && error.message;
    // });
  // }

  // async handleForm(e) {
    //   e.preventDefault();
    //   const { source, error } = await this.stripe.createSource(this.card);
    //   if (error) {
      //     // Inform the customer that there was an error.
      //     const cardErrors = error.message;
      //   } else {
        //     // Send the token to your server.
        //     this.isLoading = true;
        //     const fun = this.functions.httpsCallable('stripeCreateSubscription');
        //     this.confirmation = await fun({
          //       source: source.id,
          //       uid: this.user.uid,
          //       plan: this.planID,
          //     }).toPromise();
          //     this.isLoading = false;
          //     this.wizard.goToStep(2);
          //   }
          // }

          // async handlePayment(e: Event) {
          //   e.preventDefault();
          //   this.btnOpts.active = true;

          //   try {
          //     await this.stripe
          //     .confirmCardPayment(
          //       environment.stripePubKey,
          //       {
          //         payment_method: { card: this.card },
          //         receipt_email: this.user.email
          //       },
          //       paymentIntent: {pi, error} =
          //       if (error){
          //       console.error(error);
          //       this.onClose.emit(null);
          //     } else {
          //       console.log(pi)
          //       this.btnOpts.active = false;
          //       this.done = true
          //       setTimeout(() => this.onClose.emit(this.data), 1200)
          //       await this.pmt.confirmSetupIntent(this.setupIntent.id, pi.payment_method)

          //   //   if (environment.production){
          //   //     console.log('firing purchase event');
          //   //     this.analytics.logEvent('purchase', {
          //   //       transaction_id: this.data.title,
          //   //       currency: 'US',
          //   //       price: this.data.price,
          //   //       date: new Date()
          //   //     });
          //   // }
          //   }
          // } catch (e){
          //   console.error(e)
          //   this.onClose.emit(null)
          //   }
