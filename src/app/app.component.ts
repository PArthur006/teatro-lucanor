import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { NarrativaService } from './core/services/narrativa.service';
import { Cena, EstadoHistorico } from './core/models/scene.model';
import { GlossarioPipe } from './core/pipes/glossario.pipe';

/**
 * Componente raiz (standalone) responsável por orquestrar a lógica 
 * da narrativa, o estado de gamificação (Termômetro de Engano) e 
 * as animações de ciclo de vida da interface.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GlossarioPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeBlur', [
      transition('* => *', [
        style({ opacity: 0, filter: 'blur(8px)', transform: 'translateY(10px)' }),
        animate('400ms cubic-bezier(0.25, 1, 0.5, 1)', style({ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  cenaAtual!: Cena;
  modoMedieval: boolean = false;
  nivelEngano: number = 0;
  historico: EstadoHistorico[] = [];

  constructor(private narrativaService: NarrativaService) {}

  ngOnInit(): void {
    this.cenaAtual = this.narrativaService.obterCenaInicial();
  }

  /**
   * Processa a decisão do usuário, salva o snapshot atual no histórico
   * para rollback futuro, e avança a narrativa recalculando o termômetro.
   * 
   * @param proximaCenaId O ID da próxima cena na árvore de decisões.
   * @param impacto Modificador numérico a ser aplicado no termômetro.
   */
  escolherOpcao(proximaCenaId: string, impacto: number): void {
    this.historico.push({ cenaId: this.cenaAtual.id, nivelEngano: this.nivelEngano });
    this.nivelEngano = Math.max(0, Math.min(100, this.nivelEngano + impacto));
    this.cenaAtual = this.narrativaService.obterCena(proximaCenaId);
  }

  /**
   * Remove o último estado do histórico e retrocede o aplicativo,
   * restaurando a cena e a pontuação exata do termômetro daquele momento.
   */
  voltar(): void {
    if (this.historico.length > 0) {
      const estadoAnterior = this.historico.pop()!;
      this.nivelEngano = estadoAnterior.nivelEngano;
      this.cenaAtual = this.narrativaService.obterCena(estadoAnterior.cenaId);
    }
  }

  /**
   * Zera o estado global da aplicação, retornando o usuário à tela
   * inicial e zerando o histórico e a gamificação.
   */
  reiniciar(): void {
    this.historico = [];
    this.nivelEngano = 0;
    this.cenaAtual = this.narrativaService.obterCenaInicial();
  }
}