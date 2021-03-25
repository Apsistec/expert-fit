import { Component } from '@angular/core';

import { Faqs } from '../../models/faqs.model';

// import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage {
  faqs: any[] = Faqs;
  index;
  automaticClose = true;

  constructor() {
    // Automatically open the first level if want
    this.faqs[0].open = true;
  }

  onToggleAutomatic() {
    this.automaticClose = !this.automaticClose;
    if (!this.automaticClose) {
      this.faqs.forEach((faq) => (faq.open = faq));
    }
    if (this.automaticClose) {
      this.faqs.forEach((faq) => (faq.open = !faq));
    }
  }

  toggleSection(index) {
    this.faqs[index].open = !this.faqs[index].open;
    if (this.automaticClose && this.faqs[index].open) {
      this.faqs.filter((faq,faqIndex) => faqIndex !== index).map((faq) => (faq.open = !faq));
    }
  }
}
