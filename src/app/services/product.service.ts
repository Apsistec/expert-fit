// import { map, switchMap } from 'rxjs/operators';

// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireFunctions } from '@angular/fire/functions';
// import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
// import { MessageService } from './message.service';
// import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
// import firebase from 'firebase';

// export interface Product {
//   description: string;
//   images: string;
//   name: string;
//   role: string;
//   active: boolean;
//   id: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   products: Observable<Product[]>;
//   activeFilter: BehaviorSubject<string | null>;
//   userFilter: BehaviorSubject<string | null>;
//   uid;
//   constructor(
//     private afs: AngularFirestore,
//     public afAuth: AngularFireAuth,
//     private storage: AngularFireStorage,
//     private functions: AngularFireFunctions,
//     private messageService: MessageService
//   ) { 
//    }

//   getAllProducts() {
//     this.afs
//       .collection('products', (ref) => ref.where('active', '==', true))
//       .get()
//       .pipe(
//         map((querySnapshot) => {
//           querySnapshot.forEach(async (res) => {
//             console.log(res.id, ' => ', res.data());
//             const priceSnap = await res.ref.collection('prices').get();
//             priceSnap.docs.forEach((doc) => {
//               console.log(doc.id, ' => ', doc.data());
//             });
//           });
//         })
//       );
//   }

//   getOneProduct(id) {
//     return this.afs.doc(`products/${id}`).valueChanges();
//   }

//   async addProduct(product) {
//     product.creator = (await this.afAuth.currentUser).uid;
//     const imageData = product.img;
//     delete product.image;

//     let documentId = null;
//     let storageRef: AngularFireStorageReference = null;

//     return this.afs
//       .collection('products')
//       .add(product)
//       .then((ref) => {
//         documentId = ref.id;
//         storageRef = this.storage.ref(`products/${documentId}`);
//         const uploadTask = storageRef.putString(imageData, 'base64', { contentType: 'image/png' });
//         return uploadTask;
//       })
//       .then((task) => {
//         return storageRef.getDownloadURL().toPromise();
//       })
//       .then((imageUrl) => {
//         return this.afs.doc(`products/${documentId}`).update({ images: imageUrl });
//       })
//       .catch((error) => this.messageService.errorAlert(JSON.stringify(error)));
//   }

//   deleteProduct(id) {
//     this.afs.doc(`products/${id}`).delete();
//     this.storage
//       .ref(`products/${id}`)
//       .delete()
//       .subscribe((res) => {});
//   }

//   async startPaymentIntent(amount, items) {
//     const callable = this.functions.httpsCallable('startPaymentIntent');
//     const obs = callable({ userId: (await this.afAuth.currentUser).uid, amount, items });
//     return obs;
//   }

//   async getCusomterOrders() {
//     const callable = this.functions.httpsCallable('getCustomerOrders');
//     const obs = callable({ userId: (await this.afAuth.currentUser).uid });
//     return obs;
//   }

//   getOrderData(paymentIntentId) {
//     return this.afs.doc(`orders/${paymentIntentId}`).valueChanges();
//   }
// }
