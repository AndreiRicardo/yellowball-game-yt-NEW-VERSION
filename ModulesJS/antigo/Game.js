import * as Envy from "./Envy.js";

/* Envy.variaveis.char = {nome : "andrei"}

console.log(Envy.variaveis.char.nome)
como funciona a troca de valores em objetos exportados/exportados */

//variáveis do jogo


    Envy.Objs.pontosParaNovaFase = [5, 10, 15, 20],
    Envy.Objs.faseAtual = 0,

 Envy.Objs.labelNovaFase = {
        texto: "",
        opacidade: 0.0,

        fadeIn: function (dt) {
            var fadeInId = setInterval(function () {
                if (Envy.Objs.labelNovaFase.opacidade < 1.0)
                    labelNovaFase.opacidade += 0.01;

                else {
                    clearInterval(fadeInId);
                }
            }, 10 * dt);
        },

        fadeOut: function (dt) {
            var fadeOutId = setInterval(function () {
                if (Envy.Objs.labelNovaFase.opacidade > 0.0)
                    Envy.Objs.labelNovaFase.opacidade -= 0.01;

                else {
                    clearInterval(fadeOutId);
                }
            }, 10 * dt);
        }
    }

Envy.Objs.floor = {
        y: 550,
        x: 0,
        altura: 50,

        upDate: function () {
            this.x -= VELOCIDADE;

            if (this.x <= -30)
                this.x += 30;
        },

        drawing: function () {
            spritefloor.drawing(this.x, this.y);
            spritefloor.drawing(this.x + spritefloor.largura, this.y);
        }
    },

    Envy.Objs.char = {
        x: 50,
        y: 0,
        altura: spriteBoneco.altura,
        largura: spriteBoneco.largura,
        gravidade: 1.6,
        velocidade: 0,
        forcaDoPulo: 23.6,
        qntPulos: 0,
        score: 0,
        rotacao: 0,

        vidas: 3,
        colidindo: false,

        upDate: function () {
            this.velocidade += this.gravidade;
            this.y += this.velocidade;
            this.rotacao += Math.PI / 180 * VELOCIDADE;

            if (this.y > floor.y - this.altura && estadoAtual != estados.perdeu) {
                this.y = floor.y - this.altura;
                this.qntPulos = 0;
                this.velocidade = 0;
            }
        },

        pula: function () {
            if (this.qntPulos < maxPulos) {
                this.velocidade = -this.forcaDoPulo;
                this.qntPulos++;
            }
        },

        reset: function () {
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

        drawing: function () {
            contexto.save();
            contexto.translate(this.x + this.largura / 2, this.y + this.altura / 2);
            contexto.rotate(this.rotacao);
            spriteBoneco.drawing(-this.largura / 2, -this.altura / 2);
            contexto.restore();
        }
    }

    Envy.Objs.obstaculos = {
        _obs: [],
        _scored: false,
        _sprites: [redObstacle, pinkObstacle, blueObstacle, greenObstacle, yellowObstacle],

        timerInsere: 0,

        insere: function () {
            this._obs.push({
                x: LARGURA,
                y: floor.y - Math.floor(20 + Math.random() * 100),
                //largura: 50 + Math.floor(10 * Math.random()),
                largura: 50,
                sprite: this._sprites[Math.floor(this._sprites.length * Math.random())]
            });

            this.timerInsere = 30 + Math.floor(20 * Math.random());
        },

        upDate: function () {
            if (this.timerInsere == 0)
                this.insere();

            else
                this.timerInsere--;

            for (var i = 0, tam = this._obs.length; i < tam; i++) {
                var obj = this._obs[i];
                obj.x -= VELOCIDADE;

                if (!char.colidindo && obj.x <= char.x + char.largura &&
                    char.x <= obj.x + obj.largura &&
                    obj.y <= char.y + char.altura) {

                    char.colidindo = true

                    setTimeout(function () {
                        char.colidindo = false;
                    }, 500);

                    if (char.vidas >= 1)
                        char.vidas--;

                    else {
                        estadoAtual = estados.perdeu
                    }
                }

                else if (obj.x <= 0 && !obj._scored) {
                    char.score++;
                    obj._scored = true;

                    if (faseAtual < pontosParaNovaFase.length &&
                        char.score == pontosParaNovaFase[faseAtual])
                        passarDeFase();
                }

                else if (obj.x <= -obj.largura) {
                    this._obs.splice(i, 1);
                    tam--;
                    i--;
                }
            }
        },

        limpa: function () {
            this._obs = [];
        },

        drawing: function () {
            for (var i = 0, tam = this._obs.length; i < tam; i++) {
                var obj = this._obs[i];

                obj.sprite.drawing(obj.x, obj.y);
            }
        }
    };

function clique(event) {
    if (estadoAtual == estados.jogar) {
        estadoAtual = estados.jogando;
        frames = 0;
    }

    else if (estadoAtual == estados.perdeu && char.y >= 2 * ALTURA) {
        estadoAtual = estados.jogar;
        obstaculos.limpa();
        char.reset();
    }

    else if (estadoAtual == estados.jogando)
        char.pula();
}

function passarDeFase() {
    VELOCIDADE++;
    faseAtual++;
    char.vidas++;

    if (faseAtual == 4)
        char.gravidade *= 0.6;

    labelNovaFase.texto = "Level " + faseAtual;
    labelNovaFase.fadeIn(0.4);

    setTimeout(function () {
        labelNovaFase.fadeOut(0.4);
    }, 800);
}

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }

    canvasTela = document.createElement("canvas");
    canvasTela.width = LARGURA;
    canvasTela.height = ALTURA;
    canvasTela.style.border = "1px solid #000";

    contexto = canvasTela.getContext("2d");
    document.body.appendChild(canvasTela);

    document.addEventListener("mousedown", clique);

    estadoAtual = estados.jogar;

    record = localStorage.getItem("record");

    if (record == null)
        record = 0;

    img = new Image();
    img.src = "imagens/sheet.png";

    running();
}

function running() {
    upDate();
    drawing();

    window.requestAnimationFrame(running);
}

function upDate() {
    if (estadoAtual == estados.jogando)
        obstaculos.upDate();

    floor.upDate();
    char.upDate();
}

function drawing() {
    bg.drawing(0, 0);

    contexto.fillStyle = "#fff";
    contexto.font = "50px Arial";
    contexto.fillText(char.score, 30, 68);
    contexto.fillText(char.vidas, 540, 68);

    contexto.fillStyle = "rgba(0, 0, 0, " + labelNovaFase.opacidade + ")";
    contexto.fillText(labelNovaFase.texto, canvasTela.width / 2 - contexto.measureText(labelNovaFase.texto).width / 2, canvasTela.height / 3);

    if (estadoAtual == estados.jogando)
        obstaculos.drawing();

    floor.drawing();
    char.drawing();

    if (estadoAtual == estados.jogar)
        jogar.drawing(LARGURA / 2 - jogar.largura / 2, ALTURA / 2 - jogar.altura / 2);

    if (estadoAtual == estados.perdeu) {
        perdeu.drawing(LARGURA / 2 - perdeu.largura / 2, ALTURA / 2 - perdeu.altura / 2 - spriteRecord.altura / 2);

        spriteRecord.drawing(LARGURA / 2 - spriteRecord.largura / 2, ALTURA / 2 + perdeu.altura / 2 - spriteRecord.altura / 2 - 25);

        contexto.fillStyle = "#fff";
        contexto.fillText(char.score, 375, 390);

        if (char.score > record) {
            novo.drawing(LARGURA / 2 - 180, ALTURA / 2 + 30);
            contexto.fillText(char.score, 420, 470);
        }

        else
            contexto.fillText(record, 420, 470);
    }
}

//inicializa o jogo
main();