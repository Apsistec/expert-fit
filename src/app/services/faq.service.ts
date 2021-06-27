import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FAQ } from '../models/faqs.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqs;

  constructor(private db: AngularFirestore) {}

  getFaqs() {
    return this.db

      .collection<FAQ>('faqs')

      .valueChanges()
      .subscribe((faqs) => {
        this.faqs = faqs;
      });
  }
}
