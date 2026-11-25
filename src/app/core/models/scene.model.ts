export type TipoBotao = 'acao' | 'alerta';

export interface OpcaoCena {
  label: string;
  proximaCenaId: string;
  tipo: TipoBotao;
  impactoEngano: number; // Nova propriedade: Ex: +20 ou -10
}

export interface Cena {
  id: string;
  texto: string;
  textoMedieval: string;
  opcoes: OpcaoCena[];
  isFinal?: boolean;
}

export interface TermoGlossario {
  palavra: string;
  definicao: string;
}

// Novo modelo para o Histórico para o botão "Voltar" não quebrar os pontos
export interface EstadoHistorico {
  cenaId: string;
  nivelEngano: number;
}