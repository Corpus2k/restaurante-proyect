import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "restaurante-proyect", appId: "1:83970312280:web:f71f03c342b52abd03622d", storageBucket: "restaurante-proyect.firebasestorage.app", apiKey: "AIzaSyALWpo9Fqs7bXaHZecToQ3SQUK-Lb71FQU", authDomain: "restaurante-proyect.firebaseapp.com", messagingSenderId: "83970312280" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "restaurante-proyect", appId: "1:83970312280:web:f71f03c342b52abd03622d", storageBucket: "restaurante-proyect.firebasestorage.app", apiKey: "AIzaSyALWpo9Fqs7bXaHZecToQ3SQUK-Lb71FQU", authDomain: "restaurante-proyect.firebaseapp.com", messagingSenderId: "83970312280" })), provideFirestore(() => getFirestore()), provideDataConnect(() => getDataConnect(connectorConfig)), provideTanStackQuery(new QueryClient())]
};
