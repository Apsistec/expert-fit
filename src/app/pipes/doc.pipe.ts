import { Observable } from 'rxjs';

import { Pipe, PipeTransform } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';

@Pipe({
  name: 'doc'
})
export class DocPipe implements PipeTransform {
  constructor(private firestoreService: FirestoreService) {}

  transform(value: any): Observable<any> {
    return this.firestoreService.doc$(value.path);
  }
}
