
import 'firebase/auth';

import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent implements OnInit {
  otpSent = false; //OTP sent status
  recaptchaVerifier;
  confirmationResult: firebase.default.auth.ConfirmationResult;

  phoneNumber: string; //set value after OTP is sent

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container', { size: 'invisible' });
  }

  sendOTP() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const phNo = (<HTMLInputElement>document.getElementById('phoneNumber')).value;

    firebase.default
      .auth()
      .signInWithPhoneNumber(phNo, this.recaptchaVerifier)
      .then((result) => {
        this.phoneNumber = phNo;
        this.otpSent = true;
        this.confirmationResult = result;
      })
      .catch((err) => {
        alert(err);
      });
  }

  verifyOTP() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const otp = (<HTMLInputElement>document.getElementById('otp')).value;

    this.confirmationResult
      .confirm(otp)
      .then((data) => {
        alert('Success');
      })
      .catch((err) => {
        alert(err);
      });
  }

  dismissModal() {
    this.modalController.dismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
