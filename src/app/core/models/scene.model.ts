/**
 * Define a variante visual e semântica do botão.
 */
export type TipoBotao = 'acao' | 'alerta';

/**
 * Estrutura de uma opção de escolha dentro de uma cena.
 */
export interface OpcaoCena {
  label: string;
  proximaCenaId: string;
  tipo: TipoBotao;
  impactoEngano: number; // Modificador do termômetro (ex: +20, -10)
}

/**
 * Representa o estado completo de um momento da narrativa.
 */
export interface Cena {
  id: string;
  texto: string;
  textoMedieval: string;
  opcoes: OpcaoCena[];
  isFinal?: boolean;
}

/**
 * Dicionário para o Pipe de micro-learning (Tooltips).
 */
export interface TermoGlossario {
  palavra: string;
  definicao: string;
}

/**
 * Snapshot do estado para o histórico de navegação (botão Voltar).
 */
export interface EstadoHistorico {
  cenaId: string;
  nivelEngano: number; // Salva a pontuação exata daquele momento
}