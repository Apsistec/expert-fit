import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  choice;
  pushReqRes: boolean;

  constructor(private toastController: ToastController, private alertController: AlertController) {}

  // Toasts
  async presentToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000,
      cssClass: 'infoT',
      position: 'top'
    });
    toast.present();
  }

  async loggedInToast(displayName) {
    const toast = await this.toastController.create({
      header: 'Login Successful',
      message: 'Welcome Back ' + displayName || 'User' + '!',
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 2500
    });
    await toast.present();
  }

  async signOutToast() {
    const toast = await this.toastController.create({
      header: 'Sign Out Successful',
      cssClass: 'successT',
      message: 'Thank You for Stopping By!',
      position: 'top',
      duration: 2500,
      keyboardClose: true
    });
    await toast.present();
  }

  async deleteTicketToast() {
    const toast = await this.toastController.create({
      header: 'Ticket Deleted',
      cssClass: 'successT',
      message: 'The ticket was successfully deleted.',
      position: 'top',
      duration: 2500,
      keyboardClose: true
    });
    await toast.present();
  }

  async updateNameToast() {
    const toast = await this.toastController.create({
      header: 'Update Successful',
      message: 'User info was updated',
      duration: 3000,
      position: 'top',
      cssClass: 'successT',
      keyboardClose: true
    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastController.create({
      header: 'Payment Successful',
      cssClass: 'successT',
      message: 'You are subscribed! Thank You!',
      position: 'top',
      duration: 3000,
      keyboardClose: true
    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastController.create({
      header: 'Invalid Request',
      cssClass: 'warningT',
      message: ' You are already Subscribed',
      position: 'top',
      duration: 3000,
      keyboardClose: true
    });
    await toast.present();
  }

  async generalToast(message) {
    const toast = await this.toastController.create({
      header: 'Message Service',
      cssClass: 'successT',
      message,
      position: 'top',
      duration: 2500,
      keyboardClose: true
    });
    await toast.present();
  }

  async welcomeBackToast(data) {
    const toast = await this.toastController.create({
      header: 'Login Successful!',
      message: 'Welcome Back ' + data.displayName,
      duration: 2000,
      cssClass: 'successT',
      position: 'top'
    });
    toast.present();
  }

  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertController.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      message: 'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK'],
      cssClass: 'dangerA'
    });
    await alert.present();
  }

  async pastDueAlert() {
    const alert = await this.alertController.create({
      message:
        'Currently, your account is Past Due. You can update your account with a valid card and make a payment in order to restore access immediately',
      cssClass: 'dangerA',
      subHeader: 'Payment Past-due'
    });
    alert.present();
  }

  async cancelledAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Account Cancelled',
      message:
        'Your account has successfully been cancelled, and service will end on the last day of your billing period(usually the last day of the month). Your card will not be charged again. In order to utilize the services, you will need to register a new account.',
      cssClass: 'dangerA'
    });
    alert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertController.create({
      header: 'Access Denied',
      subHeader: 'Active Membership Required',
      message:
        'We have not been able to process a payment with the card on file. Please apply a valid card and we will process your payment immediately in order to provide access to your new account',
      buttons: ['OK'],
      cssClass: 'dangerA'
    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent',
      message: 'Check your email for a link to RESET your password',
      buttons: ['OK'],
      cssClass: 'successA'
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Request',
      message: 'You are already Subscribed',
      buttons: ['OK'],
      cssClass: 'warningA'
    });
    await alert.present();
  }

  async registerSuccessAlert(displayName) {
    const toast = await this.alertController.create({
      header: 'Registration Successful',
      subHeader: 'Welcome ' + displayName + '!',
      message:
        'You have successfully registered and a verification request has been sent to your email. Check your email for instructions',
      cssClass: 'successA',
      keyboardClose: true,
      buttons: ['OK']
    });
    return toast.present();
  }

  async internalBlockPageAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
      message: 'Your account does not need access to this area',
      cssClass: 'warningA',
      buttons: ['OK']
    });
    await alert.present();
  }

  async globalErrorAlert(error, router, page?) {
    const alert = await this.alertController.create({
      header: 'Page: ' + page,
      subHeader: 'Location: ' + router.url,
      message: error.message,
      cssClass: 'warningA',
      backdropDismiss: false,

    });
    await alert.present();
  }

  async errorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: error.code,
      backdropDismiss: false,
      message: error.message,
      buttons: ['OK'],
      cssClass: 'warningA'
    });
    await alert.present();
  }

  async authErrorAlert(error) {
    const alert = await this.alertController.create({
      header: 'Authentication Error ' + error.number,
      subHeader: 'Error Code: ' + error.code,
      message: error.message,
      backdropDismiss: false,
      buttons: ['OK'],
      cssClass: 'warningA'
    });
    await alert.present();
  }

  async onPushRequest() {
    const alert = await this.alertController.create({
      header: 'Expert Fitness App Messages',
      subHeader: 'Push Notifications',
      message: `Press 'Okay' to start receiving push notifications`,
      backdropDismiss: false,
      cssClass: 'infoA',
      buttons: [
        {
          text: 'Okay',
          role: 'true'
        },
        {
          text: 'Cancel',
          role: 'false'
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss().then((data): boolean => {
      this.pushReqRes = !!data;
      return this.pushReqRes;
    });
  }

  async resetWelcomeAlert( header: string, message: string ) {
    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss: false,
      cssClass: 'infoA',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay',
          role: 'okay'
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async deleteFeedAlert(feedId) {
    const alert = await this.alertController.create({
      header: 'Delete Post',
      subHeader: feedId,
      message: 'Are you sure you want to delete this post?',
      cssClass: 'warningA',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'delete'
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async updateOrCancel() {
    const alert = await this.alertController.create({
      header: 'Update Available?',
      subHeader: 'An update is available by reloading',
      message: 'Press Update to reload the page and apply the new update or press cancel to close.',
      backdropDismiss: false,
      cssClass: 'infoA',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          role: 'update'
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }
}
