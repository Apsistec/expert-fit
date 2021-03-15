import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => {
            // error.error?.message || error.statusText;
            this.messageService.errorAlert(error.message);
            console.error(error);
            return throwError(error);
        }));
    }
}
