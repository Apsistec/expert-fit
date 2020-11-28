import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input('appHasPermission')
  permissions: string[] = [];
  subs: Subscription = new Subscription();

  constructor(
    private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.subs = this.auth.currentBehaviorUser.subscribe((user) => {
      if (this.auth.hasPermissions(this.permissions)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
