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
    }
};
