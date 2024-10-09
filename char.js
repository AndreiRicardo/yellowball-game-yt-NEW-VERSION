export const char = {
    x: 50,
    y: 0,
    altura: 50, // Ajuste conforme o sprite
    largura: 50, // Ajuste conforme o sprite
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo: 23.6,
    qntPulos: 0,
    score: 0,
    vidas: 3,
    colidindo: false,

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
        // Desenho do personagem
    }
};
