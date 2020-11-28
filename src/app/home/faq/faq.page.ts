import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { Faqs } from '../../models/faqs.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqs = Faqs;
  title = 'FAQs';
  detailsOpen;
  // isOpen = false;
  // public content: HTMLDivElement;

  @ViewChild('details', { static: true }) details: ElementRef;
  @ViewChild('summary', { static: true }) summary: ElementRef;

  @Output() toggle = new EventEmitter<string>();

  constructor(private seo: SeoService) {
    this.seo.addTwitterCard(
      this.title,
      'This is the FAQ page for those who are have questions about the Expert Fitness products and services',
      '../../../assets/logos/logo.png'
    );
  }

  ngOnInit() {
    // `$('details')`.on('click', function(event) {       $(this).siblings('details').removeAttr('open'); });  }
  }
  onToggle() {
    //   this.details: = !this.details[open]
  }
}
