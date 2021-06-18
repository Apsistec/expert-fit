import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FAQ } from '../models/faqs.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqs;

  constructor(private afs: AngularFirestore) {}

  getFaqs(){
   return this.afs.collection<FAQ>('faqs').valueChanges()
    .subscribe((faqs) => {
      this.faqs = faqs;
    });
  }
}