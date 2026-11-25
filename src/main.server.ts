import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Ponto de entrada (Entry Point) para a renderização no lado do Servidor (SSR).
 * Utilizado pelo Express para gerar o HTML inicial antes de enviá-lo ao cliente.
 */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;