# Playlist Mixer

Um gerador de playlists customizadas que permite ao usuário misturar músicas de diferentes fontes com regras e pesos definidos. Este projeto foi desenvolvido como atividade final para a disciplina de Desenvolvimento de Software para Web.

## Integrantes

- Gabriel Palmeira Luchi

## Sobre o Projeto

O "Playlist Mixer" é uma aplicação puramente front-end que resolve um problema comum para amantes de música: a criação de playlists mistas de forma inteligente e controlada. O foco aqui foi a simplicidade, apenas para treinar conceitos vistos em aula.
A aplicação permite que o usuário:

- Selecione duas fontes de música (álbuns ou playlists) a partir de uma lista pré-definida.
- Parametrize a geração da nova playlist, controlando cada música individualmente.
- Defina regras como:
    -  **Peso numérico:** para dar mais ou menos chance de uma música aparecer.Peso numérico: para dar mais ou menos chance de uma música aparecer.
    - **Obrigatoriedade:** para garantir que uma música essencial esteja na lista final.
    - **Repetição:** para permitir que uma música apareça mais de uma vez.
- Gere uma playlist aleatória que respeita todas as regras definidas.

## Como Rodar o Projeto

Para rodar o projeto, não é necessário instalar dependências, servidores ou realizar processos de build.

    1.  Clone ou baixe os arquivos (index.html, script.js, style.css) para uma pasta em seu computador.
    2.  Abra o arquivo index.html diretamente em qualquer navegador de internet (Chrome, Firefox, Edge, etc.).

## Decisões Técnicas

As escolhas de tecnologia foram feitas para equilibrar os requisitos da atividade com a simplicidade de desenvolvimento e execução.

* **Framework - Vue.js (via CDN)**: O projeto exigia o uso de um framework. O Vue.js foi escolhido por sua curva de aprendizado suave e poder. A decisão crucial foi utilizá-lo via CDN (importando o script no `index.html`), o que nos permitiu usar a estrutura e a reatividade de um framework moderno sem a necessidade de um ambiente Node.js, NPM ou qualquer processo de build, mantendo o projeto extremamente simples de rodar.

* **Gerenciamento de Estado**: Para um projeto desta escala, o sistema de reatividade nativo do Vue (`data()`) é mais do que suficiente para gerenciar todo o estado da aplicação (seleções do usuário, parâmetros, lista final). O uso de bibliotecas externas como Vuex ou Pinia seria um exagero e adicionaria complexidade desnecessária.

* **Estrutura de Dados**: Conforme o escopo, a aplicação é totalmente front-end e utiliza dados fixos. As fontes de música foram "mockadas" como uma constante de JavaScript (`const fontesDeMusicas`) no arquivo `script.js`, simulando uma API ou banco de dados de forma simples e direta.
