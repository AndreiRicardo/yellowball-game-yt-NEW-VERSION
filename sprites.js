// sprites.js
export const sprites = {
    sheet: new Image(),
    boneco: {
        x: 0,
        y: 0,
        largura: 50,
        altura: 50
    },
    obstaculo: {
        x: 50,
        y: 0,
        largura: 50,
        altura: 50
    },

    init: function() {
        this.sheet.src = 'Assets/sheet.png'; // Caminho para o sprite sheet
    },

    desenhaBoneco: function(contexto, posX, posY) {
        contexto.drawImage(
            this.sheet,
            this.boneco.x, 
            this.boneco.y, 
            this.boneco.largura, 
            this.boneco.altura, 
            posX, 
            posY, 
            this.boneco.largura, 
            this.boneco.altura
        );
    },

    desenhaObstaculo: function(contexto, posX, posY) {
        contexto.drawImage(
            this.sheet,
            this.obstaculo.x, 
            this.obstaculo.y, 
            this.obstaculo.largura, 
            this.obstaculo.altura, 
            posX, 
            posY, 
            this.obstaculo.largura, 
            this.obstaculo.altura
        );
    }
};
