import { Observable, Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { FAQ } from '../models/faqs.model';

// import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit, OnDestroy {
  index;
  index1;
  allClose = true;
  faqs: any[];
  faqCollection: AngularFirestoreCollection<FAQ>;
  expanded;
  subs: Subscription = new Subscription()
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.getFaqs();
    // Automatically open the first level if want
    this.allClose = true;
    this.faqs[0].open = true;
  }

  getFaqs() {
    this.faqCollection = this.afs.collection<FAQ>('faqs');
    this.faqCollection.valueChanges().subscribe((faqs) => {
      this.faqs = faqs;
    });
  }

  close(){
    this.allClose = !this.allClose;
  }

  toggleSection(index) {
    this.faqs[index].open = !this.faqs[index].open;

    if (this.allClose && this.faqs[index].open) {
      this.faqs.filter((item, itemIndex) => itemIndex != index).map((item) => (item.open = false));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
