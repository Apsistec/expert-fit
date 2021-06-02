import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocPipe } from '../pipes/doc.pipe';
import { SafePipe } from '../pipes/safe.pipe';
import { ToHttpsPipe } from '../pipes/to-https.pipe';
import { FadeHeaderDirective } from './fade-header.directive';
import { HasPermissionDirective } from './has-permission.directive';
import { HideHeaderDirective } from './hide-header.directive';

@NgModule({
  declarations: [HasPermissionDirective, HideHeaderDirective, FadeHeaderDirective, ToHttpsPipe, SafePipe, DocPipe],
  imports: [CommonModule],
  exports: [HasPermissionDirective, HideHeaderDirective, FadeHeaderDirective, ToHttpsPipe, SafePipe, DocPipe]
})
export class SharedDirectivesModule {}
