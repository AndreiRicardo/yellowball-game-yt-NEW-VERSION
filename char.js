import { sprites } from './sprites.js';



export const char = {
    x: 50,
    y: 0,
    largura: 50,
    altura: 50,
    // ... outros atributos

    upDate: function () {
        // Lógica de atualização do personagem
    },

    pula: function () {
        // Lógica do pulo
    },

    reset: function () {
        // Reset do personagem
    },

    drawing: function (contexto) {
        sprites.desenhaBoneco(contexto, this.x, this.y);
    },
  // ...
  desenha: function(contexto) {
    // Carrega a imagem do arquivo na pasta assets
    const imagem = sprites.sheet;
    const largura = imagem.width;
    const altura = imagem.height;

    // Corta a parte da imagem que deseja usar como sprite
    const x = 0; // coordenada x da parte da imagem que deseja usar
    const y = 0; // coordenada y da parte da imagem que deseja usar
    const larguraSprite = 50; // largura do sprite
    const alturaSprite = 50; // altura do sprite

    contexto.drawImage(imagem, x, y, larguraSprite, alturaSprite, this.x, this.y, larguraSprite, alturaSprite);
  }
};