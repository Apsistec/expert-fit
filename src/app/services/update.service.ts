import { Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService implements OnDestroy{
    updateAvailable: Subscription;
    isUpdateAvailable: Subscription;

    constructor(
      private swUpdate: SwUpdate,
      private messageService: MessageService
    ) {
    }

    checkForUpdateService() {
      const enabled = this.swUpdate.isEnabled;
      if (enabled) {
        const isUpdateAvailable = new Observable((observer) => {
          observer.next( (update: boolean) => {
            if (update === true) {
              this.messageService.updateOrCancel().then((choice) => {
                if (choice === 'update') {
                  this.swUpdate.activateUpdate().then((updateComplete) => {
                    window.location.reload();
                  });
                }
              });
            }
          }
          );
          observer.error((error) => {
            return this.messageService.errorAlert( error );
          });
          observer.complete();
        });

        isUpdateAvailable.subscribe();
      }
    }
    public ngOnDestroy(): void {
      this.isUpdateAvailable.unsubscribe();
    }

  }
