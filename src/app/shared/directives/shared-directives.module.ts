import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafePipe } from './pipes/safe.pipe';
import { ToHttpsPipe } from './pipes/to-https.pipe';
import { HasPermissionDirective } from './has-permission.directive';
// import { FadeHeaderDirective } from './fade-header.directive';
// import { DocPipe } from './pipes/doc.pipe';
// import { HideHeaderDirective } from './hide-header.directive';

@NgModule({
  declarations: [HasPermissionDirective, ToHttpsPipe, SafePipe, ],
  imports: [CommonModule],
  exports: [HasPermissionDirective, ToHttpsPipe, SafePipe, ]
})
export class SharedDirectivesModule {}
