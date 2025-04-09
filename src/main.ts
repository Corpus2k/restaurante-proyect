import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/dev-sw.js?dev-sw', { type: 'module' })
      .then(() => console.log('SW registrado correctamente'))
      .catch((err) => console.warn('SW error', err));
  });
}
