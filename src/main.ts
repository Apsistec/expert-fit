import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* Normal Mode */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(error => console.error(error));

/* Debug Mode */
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((moduleRef) => {
//     const applicationRef = moduleRef.injector.get(ApplicationRef);
//     const appComponent = applicationRef.components[0];
//     enableDebugTools(appComponent);
//   });

/* PWA functionality */
defineCustomElements(window);
