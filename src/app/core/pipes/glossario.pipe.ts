import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NarrativaService } from '../services/narrativa.service';

/**
 * Pipe responsável por interceptar o texto da narrativa e injetar marcações
 * HTML para habilitar os tooltips do glossário etimológico.
 */
@Pipe({
  name: 'glossario',
  standalone: true
})
export class GlossarioPipe implements PipeTransform {

  constructor(
    private narrativaService: NarrativaService,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * Varre a string de entrada em busca de termos do dicionário, envelopando-os 
   * em tags <span> estilizadas com o atributo de tooltip.
   * 
   * @param texto A string da narrativa atual (Atual ou Medieval).
   * @returns O HTML processado e liberado das restrições de sanitização XSS do Angular.
   */
  transform(texto: string): SafeHtml {
    if (!texto) return '';
    
    let textoProcessado = texto;
    const dicionario = this.narrativaService.obterDicionario();

    dicionario.forEach(termo => {
      const regex = new RegExp(`\\b(${termo.palavra})\\b`, 'gi');
      
      const definicaoSegura = termo.definicao.replace(/"/g, '&quot;');
      
      textoProcessado = textoProcessado.replace(
        regex, 
        `<span class="termo-glossario" data-tooltip="${definicaoSegura}">$1</span>`
      );
    });

    return this.sanitizer.bypassSecurityTrustHtml(textoProcessado);
  }
}