import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FAQ } from '../../models/faqs.model';

// import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage {
  index;
  index1;
  automaticClose = true;
  faqs;
  faqCollection: AngularFirestoreCollection<FAQ>;
  expanded;
  constructor(private afs: AngularFirestore) {
    this.faqs = this.getFaqs();
    // Automatically open the first level if want

    if (this.faqs[0]) {
      this.expanded = true;
    }
  }

  getFaqs(): Observable<any> {
    this.faqCollection = this.afs.collection<FAQ>('faqs');
    return this.faqCollection.valueChanges();
  }

  onToggleAutomatic() {
    this.automaticClose = !this.automaticClose;
    if (!this.automaticClose) {
      this.expanded = true;
    }
    if (this.automaticClose) {
      this.expanded = false;
    }
  }

  toggleSection(index) {
    if (this.faqs[index] === this.expanded) {
      this.expanded = false;
    }
    if (this.faqs[index] === !this.expanded) {
      this.expanded = true;
    }
    // this.expanded = !this.expanded;
    // this.faqs[index] = this.expanded;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
