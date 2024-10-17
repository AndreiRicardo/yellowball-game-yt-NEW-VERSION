import { sprites } from './sprites.js';

export const floor = {
    y: 550,
    x: 0,
    largura: 600,
    altura: 50,

    upDate: function () {
        // Atualização do chão
    },

    drawing: function (contexto) {
        // Supondo que você tenha um sprite para o chão
        // sprites.desenhaChao(contexto, this.x, this.y); // Se você tiver um sprite para o chão
    }
};
