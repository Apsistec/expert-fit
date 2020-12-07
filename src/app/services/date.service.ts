import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
    newDate: any;
  constructor( private datepipe: DatePipe

  ) { }

    get yearDate(): any {
        return this.datepipe.transform(Date.now(), 'yyyy');
    }

    convertDate(rawDate: any, format: string) {
        this.newDate = this.datepipe.transform(rawDate, format );
        return;
    }
}
