import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

/**
 * Configuração do Servidor Express para Server-Side Rendering (SSR).
 * Gerencia a entrega de arquivos estáticos gerados no build e 
 * intercepta requisições não resolvidas para renderizar o Angular dinamicamente.
 */

const browserDistFolder = join(import.meta.dirname, '../browser');
const app = express();
const angularApp = new AngularNodeAppEngine();

// Serve arquivos estáticos da pasta /browser com cache de 1 ano
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Intercepta e renderiza rotas via Angular SSR
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

// Inicia o servidor Node.js se executado diretamente ou via PM2
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Exporta o handler de requisição para uso do Angular CLI ou Cloud Functions
export const reqHandler = createNodeRequestHandler(app);