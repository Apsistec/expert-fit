import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  loaderToShow: any;
  constructor(public loadingController: LoadingController) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = 'my-token-string-from-server';

    // Authentication by setting header with token value
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json',
        },
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        this.hideLoader();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.hideLoader();
        return throwError(error);
      })
    );
  }

  showLoader() {
    this.loaderToShow = this.loadingController
      .create({
        message: 'Processing Server Request',
      })
      .then((res) => {
        res.present();

        res.onDidDismiss().then((dis) => {
          console.log('Loading dismissed!');
        });
      });
    this.hideLoader();
  }

  hideLoader() {
    this.loadingController.dismiss();
  }
}
