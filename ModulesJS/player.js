
let Player = {
  
text: console.log("temos um bostinha e merdinha aqui"),
    x: 50,
    y: 0,
   /*  altura: spriteBoneco.altura,
    largura: spriteBoneco.largura, */
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo: 23.6,
    qntPulos: 0,
    score: 0,
    rotacao: 0,         
    vidas: 3,
    colidindo: false,

aCtion: ()=>{
    console.log("temos mais um")
    
},
upDate: ()=> {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;
    this.rotacao += Math.PI / 180 * VELOCIDADE;

    if (this.y > floor.y - this.altura && estadoAtual != estados.perdeu) {
        this.y = floor.y - this.altura;
        this.qntPulos = 0;
        this.velocidade = 0;
    }
},

pula: ()=> {
    if (this.qntPulos < maxPulos) {
        this.velocidade = -this.forcaDoPulo;
        this.qntPulos++;
    }
},
reset: ()=> {
    this.velocidade = 0;
    this.y = 0;
    if (this.score > record) {
        record = this.score;
        localStorage.setItem("record", this.score);
    }

    this.vidas = 3;
    this.score = 0;

    VELOCIDADE = 6;
    faseAtual = 0;
    this.gravidade = 1.6;

},
drawing: ()=> {
    contexto.save();
    contexto.translate(this.x + this.largura / 2, this.y + this.altura / 2);
    contexto.rotate(this.rotacao);
    spriteBoneco.drawing(-this.largura / 2, -this.altura / 2);
    contexto.restore();
}
}

export {Player}
