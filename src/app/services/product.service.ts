import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private storage: AngularFireStorage,
              private functions: AngularFireFunctions, private messageService: MessageService) { }

  getAllProducts() {
    return this.db.collection('products').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data as any };
      }))
    );
  }

  getOneProduct(id) {
    return this.db.doc(`products/${id}`).valueChanges();
  }

  async addProduct(product) {
    product.creator = (await this.afAuth.currentUser).uid;
    const imageData = product.img;
    delete product.image;

    let documentId = null;
    let storageRef: AngularFireStorageReference = null;

    return this.db.collection('products').add(product).then(ref => {
      console.log('ref: ', ref);
      documentId = ref.id;
      storageRef = this.storage.ref(`products/${documentId}`);
      const uploadTask = storageRef.putString(imageData, 'base64', { contentType: 'image/png'});
      return uploadTask;
    }).then(task => {
      console.log('task: ', task);
      return storageRef.getDownloadURL().toPromise();
    }).then(imageUrl => {
      console.log('got url: ', imageUrl);
      return this.db.doc(`products/${documentId}`).update({ img: imageUrl });
    })      .catch((err) => this.messageService.errorAlert(JSON.stringify(err)));

  }

  async getSellerProducts() {
    const id = (await this.afAuth.currentUser).uid;

    return this.db.collection('products', ref => ref.where('creator', '==', id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        // tslint:disable-next-line: no-shadowed-variable
        const id = a.payload.doc.id;
        return { id, ...data as any };
      }))
    );
  }

  deleteProduct(id) {
    this.db.doc(`products/${id}`).delete();
    this.storage.ref(`products/${id}`).delete().subscribe(res => {});
  }

  async startPaymentIntent(amount, items) {
    const callable = this.functions.httpsCallable('startPaymentIntent');
    const obs = callable({ userId: (await this.afAuth.currentUser).uid, amount, items});
    return obs;
  }

  async getCusomterOrders() {
    const callable = this.functions.httpsCallable('getCustomerOrders');
    const obs = callable({ userId: (await this.afAuth.currentUser).uid });
    return obs;
  }

  getOrderData(paymentIntentId) {
    return this.db.doc(`orders/${paymentIntentId}`).valueChanges();
  }
}
