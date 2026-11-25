import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NarrativaService } from '../services/narrativa.service';

@Pipe({
  name: 'glossario',
  standalone: true
})
export class GlossarioPipe implements PipeTransform {

  constructor(
    private narrativaService: NarrativaService,
    private sanitizer: DomSanitizer
  ) {}

  transform(texto: string): SafeHtml {
    if (!texto) return '';
    
    let textoProcessado = texto;
    const dicionario = this.narrativaService.obterDicionario();

    dicionario.forEach(termo => {
      // Cria a Regex para buscar a palavra exata
      const regex = new RegExp(`\\b(${termo.palavra})\\b`, 'gi');
      
      // Converte aspas duplas (") para a entidade HTML segura (&quot;)
      // Isso impede que o texto quebre o atributo data-tooltip
      const definicaoSegura = termo.definicao.replace(/"/g, '&quot;');
      
      textoProcessado = textoProcessado.replace(
        regex, 
        `<span class="termo-glossario" data-tooltip="${definicaoSegura}">$1</span>`
      );
    });

    return this.sanitizer.bypassSecurityTrustHtml(textoProcessado);
  }
}