import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HasPermissionDirective } from './has-permission.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { FadeHeaderDirective } from './fade-header.directive';
import { SafePipe } from '../pipes/safe.pipe';
import { ToHttpsPipe } from '../pipes/to-https.pipe';

@NgModule({
  declarations: [
    HasPermissionDirective,
    HideHeaderDirective,
    FadeHeaderDirective,
    ToHttpsPipe,
    SafePipe,
  ],
  imports: [CommonModule],
  exports: [
    HasPermissionDirective,
    HideHeaderDirective,
    FadeHeaderDirective,
    ToHttpsPipe,
    SafePipe,
  ]
})

export class SharedDirectivesModule {}
