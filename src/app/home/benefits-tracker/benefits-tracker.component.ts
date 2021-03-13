import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { BenefitsService } from 'src/app/services/benefits.service';
import { Benefit } from '../../models/benefits.model';

@Component({
  selector: 'app-benefits-tracker',
  templateUrl: './benefits-tracker.component.html',
  styleUrls: ['./benefits-tracker.component.scss']
})
export class BenefitsTrackerComponent implements OnInit {
  benefits: Observable<any[]>;
  private ngUnsubscribe: Subject<any> = new Subject();
  @Output() sendBenefit = new EventEmitter<Benefit>();
  setBenefit;
  constructor(private afs: AngularFirestore) {}

  async ngOnInit() {
    this.benefits = await this.getBenefits();
  }
  getBenefits() {
    const queryRef = this.afs.collection<Benefit>('benefits', (ref) => ref.where('active', '==', true));
    return queryRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      ),
      takeUntil(this.ngUnsubscribe)
    );
  }

  onChooseBenefit(benefit: Benefit) {
    this.sendBenefit.emit(benefit);
  }
}
