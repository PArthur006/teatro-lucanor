# Teatro Lucanor: Herramienta Didáctica Interactiva

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Aplicação web educacional desenvolvida como ferramenta de apoio metodológico para estudantes de Licenciatura em Letras-Espanhol. O projeto transforma o conto medieval *Los Burladores del Paño* (Exemplo XXXII de *El Conde Lucanor*, de Don Juan Manuel) em uma narrativa interativa de dedução social e análise diacrônica.

## 🎯 Proposta Pedagógica

O aplicativo afasta-se de quizzes tradicionais para proporcionar uma **leitura dialógica**. Ao projetar a ferramenta em sala de aula, o professor atua como mediador, permitindo que a turma tome decisões pela corte real. O objetivo é demonstrar metodologias ativas no ensino de E/LE (Espanhol como Língua Estrangeira), conectando o conceito medieval de honra e ilusão com temáticas modernas como *fake news* e efeito manada.

## ✨ Funcionalidades Principais

*   **Dualidade Linguística (Toggle Histórico):** Alternância em tempo real entre a adaptação em Castelhano Atual e o manuscrito original em Castelhano Medieval (Séc. XIV), permitindo análises fonéticas e sintáticas ao vivo (ex: conservação do *f-* inicial latino).
*   **Glossário Etimológico (Micro-learning):** Sistema de *tooltips* reativos que interceptam palavras-chave no texto para exibir suas raízes latinas e contexto histórico.
*   **Termômetro de Credibilidade (Nivel de Engaño):** Uma barra de progresso gamificada e reativa que pune ou recompensa a corte com base na ética das decisões tomadas pelos alunos.
*   **Modo Professor (Painel Metodológico):** Ao alcançar um dos finais, a interface transiciona para um painel de plano de aula, explicitando as habilidades linguísticas e argumentativas mobilizadas na dinâmica.
*   **Histórico de Estado (Rollback):** Sistema de pilha (*stack*) que permite retroceder decisões sem quebrar a pontuação da gamificação.

## 🎭 Dinâmica de Sala de Aula (Roleplay)

A eficácia desta ferramenta depende da mediação teatral do grupo:
1. **Imersão:** A turma de alunos é nomeada como o "Conselho Real".
2. **Debate:** A cada nova tela, o mediador lê o dilema e instiga a sala a argumentar os prós e contras de cada decisão.
3. **Votação:** A turma vota na ação do Rei. O operador registra a escolha no sistema.
4. **Reação:** A turma observa as consequências de sua escolha através do *Termômetro de Credibilidade*, materializando o custo da pressão social e da omissão.

## 🛠️ Arquitetura e Tecnologias

*   **Framework:** Angular (Standalone Components)
*   **Linguagem:** TypeScript
*   **Estilização:** SCSS (com modularização e Glassmorphism UI)
*   **Animações:** `@angular/animations` nativo (transições de ciclo de vida)
*   **Deploy e CI/CD:** Vercel


## 👨‍💻 Autoria

**Arquitetura e Desenvolvimento Técnico:** Pedro Arthur (Cloud to Code - C2C)

**Design de Interação e Conteúdo Literário:** Grupo de Licenciatura em Letras-Espanhol, do Instituto Federal de Brasília - Campus Ceilândia, do 2º semestre de 2026.

