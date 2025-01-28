import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { IconRegisterService } from './services/icon-register.service';
import { provideServiceWorker } from '@angular/service-worker';

import { provideMatomo, withRouter } from 'ngx-matomo-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(),
    // importProvidersFrom(HttpClientModule),
    importProvidersFrom(IconRegisterService), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
    provideMatomo(
      {
        siteId: 1,
        trackerUrl: 'https://cloud.llb-pro.net/matomo/'
      },
      withRouter(),
    )
  ]
};
