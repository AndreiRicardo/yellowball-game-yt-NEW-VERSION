import { sprites } from './sprites.js';

export const obstaculos = {
    _obs: [],
    _scored: false,

    insere: function () {
        // Lógica para inserir obstáculos
    },

    upDate: function () {
        // Atualização dos obstáculos
    },

    drawing: function (contexto) {
        for (let obj of this._obs) {
            sprites.desenhaObstaculo(contexto, obj.x, obj.y); // Usa a função do sprites.js
        }
    },

    limpa: function () {
        // Limpa obstáculos
    }
};
