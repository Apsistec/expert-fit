import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent implements OnInit {
  otpSent: boolean = false; //OTP sent status
  recaptchaVerifier;
  confirmationResult: firebase.default.auth.ConfirmationResult;

  phoneNumber: string; //set value after OTP is sent

  constructor() {}

  ngOnInit() {
    this.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container', { size: 'invisible' });
  }

  sendOTP() {
    var phNo = (<HTMLInputElement>document.getElementById('phoneNumber')).value;

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
    var otp = (<HTMLInputElement>document.getElementById('otp')).value;

    this.confirmationResult
      .confirm(otp)
      .then((data) => {
        alert('Success');
      })
      .catch((err) => {
        alert(err);
      });
  }
}
