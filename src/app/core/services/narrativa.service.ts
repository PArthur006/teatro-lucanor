import { Injectable } from '@angular/core';
import { Cena, TermoGlossario } from '../models/scene.model';

@Injectable({
  providedIn: 'root'
})
export class NarrativaService {

  private dicionario: TermoGlossario[] = [
    { palavra: 'burladores', definicao: 'Del latín tardío "burrula". Engañadores, estafadores. Personajes que viven del engaño en la literatura medieval.' },
    { palavra: 'omne', definicao: 'Hombre. Evolución del latín "homo", anterior a la forma moderna "hombre". Muy usado por Don Juan Manuel.' },
    { palavra: 'omnes', definicao: 'Hombres. Plural de "omne".' },
    { palavra: 'fijo', definicao: 'Hijo. En el castellano del siglo XIV se conservaba la "f" inicial latina ("filius") antes de aspirarse en "h".' },
    { palavra: 'farían', definicao: 'Harían. Del verbo latino "facere", manteniendo la "f" inicial.' },
    { palavra: 'et', definicao: 'Y. Conjunción copulativa latina, marca registrada del estilo de Don Juan Manuel.' },
    { palavra: 'dixieron', definicao: 'Dijeron. El sonido /x/ representaba un sonido prepalatal fricativo sordo, que luego evolucionó a la "j" moderna.' },
    { palavra: 'ca', definicao: 'Porque. Conjunción causal muy común en la Edad Media, del latín "quia".' },
    { palavra: 'desque', definicao: 'Desde que / Después de que. Usado para indicar tiempo.' },
    { palavra: 'desnuyo', definicao: 'Desnudo. Variante medieval común.' },
    { palavra: 'aver', definicao: 'Haber / Riqueza. En este contexto, significa "riquezas" o "bienes" (dinero).' }
  ];

  private cenas: Cena[] = [
    {
      id: 'tela_inicial',
      texto: 'Bienvenidos a la Corte. El engaño se teje con hilos invisibles y el miedo al juicio social ciega a los más sabios. ¿Están listos para guiar a Su Majestad?',
      textoMedieval: 'Bien venidos a la corte. El engaño se texe con filos invisibles et el miedo ciega a los más sabios. La verdat está ascondida en el paño.',
      opcoes: [
        { label: 'Abrir las puertas', proximaCenaId: 'cena_1_oferta', tipo: 'acao', impactoEngano: 0 }
      ]
    },
    {
      id: 'cena_1_oferta',
      texto: 'Tres forasteros llegan a la corte. Afirman ser los mejores tejedores del mundo y ofrecen tejer un paño mágico, completamente invisible para cualquier persona que no sea hijo legítimo de su padre.',
      textoMedieval: 'Llegaron tres omnes a un rey et dixieronle que eran maestros de texer, et que le farían un paño mágico, que non lo podría ver omne que non fuesse fijo de su padre.',
      opcoes: [
        { label: 'Pagarles el oro', proximaCenaId: 'cena_2_erro_pago', tipo: 'acao', impactoEngano: 30 },
        { label: 'Exigir una prueba', proximaCenaId: 'cena_2_chantagem', tipo: 'alerta', impactoEngano: -10 },
        { label: 'Consultar al consejo', proximaCenaId: 'cena_2_conselho_duvida', tipo: 'acao', impactoEngano: 0 }
      ]
    },
    {
      id: 'cena_2_conselho_duvida',
      texto: 'En privado, la corte está dividida. Algunos temen perder la oportunidad de tener el traje más maravilloso del mundo, mientras otros desconfían de los forasteros.',
      textoMedieval: 'El rey, desque esto oyó, fue muy pagado dello... mas los de su consejo avían dubda destos omnes, ca sospechavan que era engaño.',
      opcoes: [
        { label: 'Ignorar las dudas y pagar', proximaCenaId: 'cena_2_erro_pago', tipo: 'acao', impactoEngano: 30 },
        { label: 'Expulsar a los forasteros', proximaCenaId: 'final_expulsos', tipo: 'alerta', impactoEngano: -50 }
      ]
    },
    {
      id: 'cena_2_chantagem',
      texto: 'Los forasteros se ofenden indignados. "¡Majestad! ¿Acaso teme usted no ver el paño? ¿Teme que el reino descubra que no es hijo legítimo de su padre?".',
      textoMedieval: 'Los tejedores dixieron: "Sennor, ¿por ventura temedes non ver el paño et que los vuestros vasallos entiendan que non sodes fijo del rey, vuestro padre?".',
      opcoes: [
        { label: 'Ceder al miedo y pagar', proximaCenaId: 'cena_2_erro_pago', tipo: 'acao', impactoEngano: 40 }
      ]
    },
    {
      id: 'cena_2_erro_pago',
      texto: 'Los tejedores reciben el oro, montan los telares y fingen trabajar. El tiempo pasa y afirman que el tejido está casi listo. Piden que Su Majestad envíe a alguien a inspeccionar.',
      textoMedieval: 'El rey les mandó dar muy grand aver. Et ellos asestaron sus telares et fazían que texían... et pidieron al rey que fuesse ver el paño, o mandasse a otro omne.',
      opcoes: [
        { label: 'Ir personalmente', proximaCenaId: 'cena_3_rei_cego', tipo: 'acao', impactoEngano: 15 },
        { label: 'Enviar a los Consejeros', proximaCenaId: 'cena_3_conselheiros_mentem', tipo: 'acao', impactoEngano: 20 },
        { label: 'Obligar a un criado a mirar', proximaCenaId: 'cena_3_criado_ameacado', tipo: 'alerta', impactoEngano: 25 }
      ]
    },
    {
      id: 'cena_3_criado_ameacado',
      texto: 'El criado regresa temblando. Sabe que si dice la verdad, lo castigarán por bastardo. Así que miente y dice que la tela es espléndida.',
      textoMedieval: 'El omne que el rey embió, desque non vio nada, ovo grand miedo, ca pensó que non era fijo de su padre. Et tornó al rey et díxole que el paño era muy bueno.',
      opcoes: [
        { label: 'Confiar en él e ir al telar', proximaCenaId: 'cena_3_rei_cego', tipo: 'acao', impactoEngano: 10 }
      ]
    },
    {
      id: 'cena_3_rei_cego',
      texto: 'El Rey llega al cuarto. Los telares están vacíos, no ve absolutamente nada. El terror lo invade: si admite la verdad, todos creerán que no es el Rey legítimo. Entonces, miente.',
      textoMedieval: 'El rey fue a la posada et non vio el paño. Et desque non lo vio, tovo que perdía el regno; et con aquel miedo dixo que lo veía, et loó mucho el paño.',
      opcoes: [
        { label: 'Preparar el desfile', proximaCenaId: 'cena_4_desfile', tipo: 'acao', impactoEngano: 30 },
        { label: 'Llamar a los consejeros', proximaCenaId: 'cena_3_conselheiros_mentem', tipo: 'acao', impactoEngano: 10 }
      ]
    },
    {
      id: 'cena_3_conselheiros_mentem',
      texto: 'Los Consejeros miran el telar vacío. Por miedo a la deshonra social, combinan mentir. Regresan alabando la magia de un tejido inexistente.',
      textoMedieval: 'Et así fizo a todos los de su consejo, et todos ovieron grand miedo de perder sus onras et dixieron que veían el paño, et ninguno non osava dezir que non lo veía.',
      opcoes: [
        { label: 'Creerles y preparar el desfile', proximaCenaId: 'cena_4_desfile', tipo: 'acao', impactoEngano: 20 }
      ]
    },
    {
      id: 'cena_4_desfile',
      texto: 'Es el día de la gran fiesta. Los tejedores "visten" al Rey. Toda la corte está reunida. El Rey está desnudo, pero la presión social es absoluta: todos fingen ver el traje mágico.',
      textoMedieval: 'Llegó el día de la grand fiesta. Et los burladores truxieron las vestiduras et el rey vistióselas... et cavalgó por la cibdad, et todos los omnes fazían que veían el paño.',
      opcoes: [
        { label: 'Salir a las calles con orgullo', proximaCenaId: 'cena_5_criado', tipo: 'acao', impactoEngano: 20 },
        { label: 'Exigir llevar ropa normal debajo', proximaCenaId: 'cena_4_desfile_proibido', tipo: 'alerta', impactoEngano: -15 }
      ]
    },
    {
      id: 'cena_4_desfile_proibido',
      texto: 'Los tejedores se niegan rotundamente: "La ropa plebeya arruinará la magia del paño noble". La corte mira al Rey con sospecha. ¿Por qué duda Su Majestad?',
      textoMedieval: 'Los burladores dixieron que non era guisado que vistiesse otra vestidura so el paño tan rico, ca perdería su virtud. Et el rey ovo espanto de ser descubierto.',
      opcoes: [
        { label: 'Rendirse y salir desnudo', proximaCenaId: 'cena_5_criado', tipo: 'acao', impactoEngano: 35 }
      ]
    },
    {
      id: 'cena_5_criado',
      texto: 'El desfile avanza en un tenso silencio. De pronto, un criado señala al Rey y grita rompiendo la ilusión: "¡El Rey está desnudo!".',
      textoMedieval: 'Un negro que guardava el cavallo, que non avía qué perder, llegó al rey et díxole: "Sennor, a mí non me empece que me tengades por fijo de aquel padre, o yo so ciego, o vós ides desnuyo".',
      opcoes: [
        { label: 'Castigar al criado por herejía', proximaCenaId: 'final_ruim', tipo: 'alerta', impactoEngano: 100 },
        { label: 'Detener el desfile y escuchar', proximaCenaId: 'final_bom', tipo: 'acao', impactoEngano: -100 }
      ]
    },
    // --- FINAIS ---
    {
      id: 'final_expulsos',
      texto: 'El Rey expulsa a los forasteros. El reino se salva del fraude económico, pero el Rey vivirá siempre con la duda paranoica de quién en su corte es realmente legítimo.',
      textoMedieval: 'El rey mandó echar a los omnes engañadores. Et guardó su aver, mas vivió siempre con sospecha en su coraçón.',
      opcoes: [],
      isFinal: true
    },
    {
      id: 'final_ruim',
      texto: 'La vanidad ciega vence. El Rey condena al criado sincero. El efecto manada se consolida y el reino entero prefiere vivir en la falsedad antes que admitir la vergüenza colectiva.',
      textoMedieval: 'La vanidat venció al rey. Et mandó ferir al omne verdadero. Et todos en el regno escogieron vevir en la mentira por miedo de perder sus onras.',
      opcoes: [],
      isFinal: true
    },
    {
      id: 'final_bom',
      texto: 'El Rey se detiene. La multitud, animada por el criado, admite que tampoco ve nada. La farsa se quiebra y la corte confiesa su hipocresía, aunque los burladores ya han huido.',
      textoMedieval: 'El rey paró mientes et dixo verdat. Et todos los del pueblo, desque oyeron a aquel omne, perdieron el miedo et dixieron que non veían nada. Et ansí fueron desengañados.',
      opcoes: [],
      isFinal: true
    }
  ];

  obterDicionario(): TermoGlossario[] {
    return this.dicionario;
  }

  obterCena(id: string): Cena {
    const cena = this.cenas.find(c => c.id === id);
    return cena ? cena : this.cenas[0];
  }

  obterCenaInicial(): Cena {
    return this.cenas[0];
  }
}