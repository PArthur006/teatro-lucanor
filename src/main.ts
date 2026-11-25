import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Ponto de entrada (Entry Point) da aplicação no lado do Cliente (Browser).
 * Inicializa o Angular utilizando a arquitetura Standalone, sem a 
 * necessidade de um AppModule.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));