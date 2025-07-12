

// -----------------------------------------------------------------------------
// DADOS FIXOS (MOCK)
// -----------------------------------------------------------------------------
// Este objeto simula um "banco de dados" com as playlists e álbuns disponíveis.
// Cada fonte tem um nome para exibição e uma lista de músicas com id, artista e título.

const fontesDeMusicas = {
  'classicosRock': {
    nome: 'Álbum de Rock Clássico',
    musicas: [
      { id: 1, artista: 'Queen', titulo: 'Bohemian Rhapsody' },
      { id: 2, artista: 'Led Zeppelin', titulo: 'Stairway to Heaven' },
      { id: 3, artista: 'The Beatles', titulo: 'Hey Jude' },
      { id: 4, artista: 'Pink Floyd', titulo: 'Comfortably Numb' }
    ]
  },
  'hitsPop': {
    nome: 'Playlist Hits Pop',
    musicas: [
      { id: 5, artista: 'Dua Lipa', titulo: 'Don\'t Start Now' },
      { id: 6, artista: 'The Weeknd', titulo: 'Blinding Lights' },
      { id: 7, artista: 'Harry Styles', titulo: 'As It Was' },
      { id: 8, artista: 'Billie Eilish', titulo: 'bad guy' }
    ]
  },
  'sertanejoRaiz': {
    nome: 'Sertanejo Raiz',
    musicas: [
      { id: 9, artista: 'Tonico e Tinoco', titulo: 'Tristeza do Jeca' },
      { id: 10, artista: 'Milionário e José Rico', titulo: 'Estrada da Vida' },
      { id: 11, artista: 'Tião Carreiro e Pardinho', titulo: 'Pagode em Brasília' },
      { id: 12, artista: 'Sérgio Reis', titulo: 'Menino da Porteira' }
    ]
  }
};

const App = {
  data() {
    return {
      fontes: fontesDeMusicas,
      fonte1Selecionada: null,
      fonte2Selecionada: null,
      parametros: {},
      
      tamanhoPlaylist: 10, 
      playlistGerada: [],  
      avisoGeracao: null,
    }
  },
  computed: {
  
    musicasFonte1() {
      if (!this.fonte1Selecionada) return [];
      return this.fontes[this.fonte1Selecionada].musicas;
    },
    musicasFonte2() {
      if (!this.fonte2Selecionada) return [];
      return this.fontes[this.fonte2Selecionada].musicas;
    }
  },
  methods: {

    getParametros(musicaId) {
      if (!this.parametros[musicaId]) {
        this.parametros[musicaId] = { peso: 1, obrigatorio: false, podeRepetir: false };
      }
      return this.parametros[musicaId];
    },

    
    gerarPlaylist() {
      // Limpa o aviso e a playlist anteriores a cada nova geração
      this.avisoGeracao = null;
      this.playlistGerada = [];

      let playlistFinal = [];
      const todasAsMusicas = [...this.musicasFonte1, ...this.musicasFonte2];

      // 1. Adicionar músicas obrigatórias
      todasAsMusicas.forEach(musica => {
        if (this.getParametros(musica.id).obrigatorio) {
          playlistFinal.push(musica);
        }
      });

      // NVerifica se o número de obrigatórias já excedeu o tamanho
      const numObrigatorias = playlistFinal.length;
      if (numObrigatorias > this.tamanhoPlaylist) {
        this.avisoGeracao = `Atenção: A playlist final contém ${numObrigatorias} músicas, pois o número de faixas obrigatórias excedeu o tamanho solicitado de ${this.tamanhoPlaylist}.`;
      }

      // 2. Criar o "pool" de sorteio
      let poolSorteio = [];
      // 
      todasAsMusicas.forEach(musica => {
        const params = this.getParametros(musica.id);
        if (!params.obrigatorio || (params.obrigatorio && params.podeRepetir)) {
          for (let i = 0; i < params.peso; i++) {
            poolSorteio.push(musica);
          }
        }
      });

      // 3. Preencher o restante da playlist
      while (playlistFinal.length < this.tamanhoPlaylist && poolSorteio.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * poolSorteio.length);
        const musicaSorteada = poolSorteio[indiceSorteado];
        
        playlistFinal.push(musicaSorteada);

        const paramsSorteado = this.getParametros(musicaSorteada.id);
        if (!paramsSorteado.podeRepetir) {
          poolSorteio = poolSorteio.filter(m => m.id !== musicaSorteada.id);
        }
      }

      // 4. Salvar o resultado
      this.playlistGerada = playlistFinal;
    }
  }
};

Vue.createApp(App).mount('#app');
