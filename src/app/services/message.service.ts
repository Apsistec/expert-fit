import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  choice;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}


  // Toasts
  async presentToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000,
      cssClass: 'info',
      position: 'middle'
    });
    toast.present();
  }

  async loggedInToast(data) {
    const toast = await this.toastController.create({
      header: 'Login Successful',
      message: 'Welcome Back ' + data.user.displayName + '!' || 'Welcome Back!',
      cssClass: 'success',
      position: 'middle',
      keyboardClose: true,
      duration: 2500,
    });
    await toast.present();
  }

  async signOutToast() {
    const toast = await this.toastController.create({
      header: 'Sign Out Successful',
      cssClass: 'success',
      message: 'Thank You for Stopping By!',
      position: 'middle',
      duration: 2500,
      keyboardClose: true,
    });
    await toast.present();
  }

  async deleteTicketToast() {
    const toast = await this.toastController.create({
      header: 'Ticket Deleted',
      cssClass: 'success',
      message: 'The ticket was successfully deleted.',
      position: 'middle',
      duration: 2500,
      keyboardClose: true,
    });
    await toast.present();
  }

  async updateNameToast() {
    const toast = await this.toastController.create({
      header: 'Update Successful',
      message: 'User info was updated',
      duration: 3000,
      position: 'middle',
      cssClass: 'success',
      keyboardClose: true,
    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastController.create({
      header: 'Payment Successful',
      cssClass: 'success',
      message: 'You are subscribed! Thank You!',
      position: 'middle',
      duration: 3000,
      keyboardClose: true,
    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastController.create({
      header: 'Invalid Request',
      cssClass: 'warning',
      message: ' You are already Subscribed',
      position: 'middle',
      duration: 3000,
      keyboardClose: true,
    });
    await toast.present();
  }

  async generalToast(message) {
    const toast = await this.toastController.create({
      header: 'Message Service',
      cssClass: 'success',
      message,
      position: 'middle',
      duration: 2500,
      keyboardClose: true,
    });
    await toast.present();
  }


  async welcomeBackToast() {
    const toast = await this.toastController.create({
      header: 'Welcome Back',
      message: 'Login Successful, your account is currently active.',
      duration: 2000,
      cssClass: 'success',
      position: 'middle',
      translucent: true
    });
    toast.present();
  }


  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertController.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      message:
      'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK'],
      cssClass: 'danger',
      translucent: true
    });
    await alert.present();
  }

  async pastDueAlert() {
    const alert = await this.alertController.create({
      message:
        'Currently, your account is Past Due. You can update your account with a valid card and make a payment in order to restore access immediately',
      cssClass: 'danger',
      translucent: true,
      subHeader: 'Payment Past-due'
    });
    alert.present();
  }

  async cancelledAlert() {
    const alertController = await this.alertController.create({
      translucent: true,
      subHeader: 'Account Cancelled',
      message:
      'Your account has successfully been cancelled, and service will end on the last day of your billing period(usually the last day of the month). Your card will not be charged again. In order to utilize the services, you will need to register a new account.',
      cssClass: 'danger',
    });
    alertController.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertController.create({
      header: 'Access Denied',
      subHeader: 'Active Membership Required',
      message: 'We have not been able to process a payment with the card on file. Please apply a valid card and we will process your payment immediately in order to provide access to your new account',
      buttons: ['OK'],
      translucent: true,
      cssClass: 'danger'
    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent',
      message: 'Check your email for a link to RESET your password',
      buttons: ['OK'],
      translucent: true,
      cssClass: 'success'
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Request',
      message: 'You are already Subscribed',
      buttons: ['OK'],
      cssClass: 'warning',
      translucent: true
    });
    await alert.present();
  }

  async registerSuccessAlert() {
    const toast = await this.alertController.create({
      header: 'Registration Successful',
      message:
        'You have successfully registered. Now, one last step.... to verify your email, check your inbox for instructions!',
      cssClass: 'success',
      keyboardClose: true,
      translucent: true,
      buttons: ['OK']
    });
    return toast.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertController.create({
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
      message: 'Your account does not need access to this area',
      cssClass: 'warning',
      buttons: ['OK'],
      translucent: true
    });
    await internalBlock.present();
  }

  async globalErrorAlert(err, router, page?) {
    const alert = await this.alertController.create({
      header: 'Page: ' + page,
      subHeader: 'Location: ' + router.url,
      message: err.message,
      cssClass: 'warning',
      translucent: true
    });
    await alert.present();
  }

  async errorAlert(err: any) {
    const alert = await this.alertController.create({
      header: 'An Error Occurred',
      message: err.message,
      buttons: ['OK'],
      translucent: true,
      cssClass: 'warning'
    });
    await alert.present();
  }

  async authErrorAlert(err: any) {
    const alert = await this.alertController.create({
      header: 'An Authentication Error Has Occurred',
      subHeader: 'Error Code: ' + err.code,
      message: err.message,
      buttons: ['OK'],
      translucent: true,
      cssClass: 'warning'
    });
    await alert.present();
  }

  async saveOrCancel() {
    const alert = await this.alertController.create({
      header: 'Are You Sure?',
      subHeader: 'Changes were NOT saved',
      message: 'Press Save to resume editing or press OK to close',
      backdropDismiss: false,
      cssClass: 'info',
      translucent: true,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
        {
          text: 'Save',
          role: 'save',
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async resetWelcomeAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      translucent: true,
      backdropDismiss: false,
      cssClass: 'info',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          role: 'okay',
        },
      ],
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
      translucent: true,
      message: 'Are you sure you want to delete this post?',
      cssClass: 'warning',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'delete',
        },
      ],
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
      message:
        'Press Update to reload the page and apply the new update or press cancel to close.',
      backdropDismiss: false,
      cssClass: 'info',
      translucent: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Update',
          role: 'update',
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }
}
