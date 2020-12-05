import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
    newDate;
  constructor( private datepipe: DatePipe

  ) { }

    get yearDate() {
        return this.datepipe.transform(Date.now(), 'yyyy');
    }

    convertDate(rawDate, format) {
        this.newDate = this.datepipe.transform(rawDate, format );
        return;
    }
}
