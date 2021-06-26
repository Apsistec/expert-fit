import { Subscription } from 'rxjs';

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
  faqs: FAQ[] = [];
  faqCollection: AngularFirestoreCollection<FAQ>;
  expanded;
  subs: Subscription = new Subscription();
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.getFaqs();
    // Automatically open the first level if want
    // for (const [index, faq] of this.faqs.entries()) {
    //   if (index === 0) {
    // faq[0].open = true;
    // }
    // }
    this.allClose = true;
  }

  getFaqs() {
    this.db
      .collection<FAQ>('faqs')
      .valueChanges()
      .subscribe((faqs) => {
        this.faqs = faqs;
        this.faqs[0].open = true;
      });
  }

  close() {
    this.allClose = !this.allClose;
  }

  toggleSection(index) {
    this.faqs[index].open = !this.faqs[index].open;

    if (this.allClose && this.faqs[index].open) {
      this.faqs.filter((faq, itemIndex) => itemIndex != index).map((faq) => (faq.open = false));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
