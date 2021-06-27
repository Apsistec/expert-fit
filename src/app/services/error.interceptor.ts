import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        // error.error?.message || error.statusText;
        this.messageService.errorAlert(error);
        console.error(error);
        return throwError(error);
      })
    );
  }
}
