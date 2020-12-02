import { estados } from "./Stats.js";
import { Clique } from './Clique.js';
import { passarDeFase } from './PassarDeFase.js';
import { roda } from './Roda.js';
/* import {
    spriteBoneco, spriteChao, redObstacle, pinkObstacle, blueObstacle, greenObstacle, yellowObstacle
} from "./Sprite.js"; */
import * as Sprites from "./Sprite.js";


//variáveis do jogo

export var canvas, ctx, ALTURA, LARGURA, VELOCIDADE = 6, maxPulos = 3,
    estadoAtual, record, img,

    pontosParaNovaFase = [5, 10, 15, 20],
    faseAtual = 0,

    labelNovaFase = {
        texto: "",
        opacidade: 0.0,

        fadeIn: function (dt) {
            var fadeInId = setInterval(function () {
                if (labelNovaFase.opacidade < 1.0)
                    labelNovaFase.opacidade += 0.01;

                else {
                    clearInterval(fadeInId);
                }
            }, 10 * dt);
        },

        fadeOut: function (dt) {
            var fadeOutId = setInterval(function () {
                if (labelNovaFase.opacidade > 0.0)
                    labelNovaFase.opacidade -= 0.01;

                else {
                    clearInterval(fadeOutId);
                }
            }, 10 * dt);
        }
    },

   

    chao = {
        y: 550,
        x: 0,
        altura: 50,

        atualiza: function () {
            this.x -= VELOCIDADE;

            if (this.x <= -30)
                this.x += 30;
        },

        desenha: function () {
            Sprites.spriteChao.desenha(this.x, this.y);
            Sprites.spriteChao.desenha(this.x + Sprites.spriteChao.largura, this.y);
        }
    },

    bloco = {
        x: 50,
        y: 0,
        altura: Sprites.spriteBoneco.altura,
        largura: Sprites.spriteBoneco.largura,
        gravidade: 1.6,
        velocidade: 0,
        forcaDoPulo: 23.6,
        qntPulos: 0,
        score: 0,
        rotacao: 0,

        vidas: 3,
        colidindo: false,

        atualiza: function () {
            this.velocidade += this.gravidade;
            this.y += this.velocidade;
            this.rotacao += Math.PI / 180 * VELOCIDADE;

            if (this.y > chao.y - this.altura && estadoAtual != estados.perdeu) {
                this.y = chao.y - this.altura;
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

        desenha: function () {
            ctx.save();
            ctx.translate(this.x + this.largura / 2, this.y + this.altura / 2);
            ctx.rotate(this.rotacao);
            Sprites.spriteBoneco.desenha(-this.largura / 2, -this.altura / 2);
            ctx.restore();
        }
    },

    obstaculos = {
        _obs: [],
        _scored: false,
        _sprites: [Sprites.redObstacle, Sprites.pinkObstacle, Sprites.blueObstacle, Sprites.greenObstacle, Sprites.yellowObstacle],

        timerInsere: 0,

        insere: function () {
            this._obs.push({
                x: LARGURA,
                y: chao.y - Math.floor(20 + Math.random() * 100),
                //largura: 50 + Math.floor(10 * Math.random()),
                largura: 50,
                sprite: this._sprites[Math.floor(this._sprites.length * Math.random())]
            });

            this.timerInsere = 30 + Math.floor(20 * Math.random());
        },

        atualiza: function () {
            if (this.timerInsere == 0)
                this.insere();

            else
                this.timerInsere--;

            for (var i = 0, tam = this._obs.length; i < tam; i++) {
                var obj = this._obs[i];
                obj.x -= VELOCIDADE;

                if (!bloco.colidindo && obj.x <= bloco.x + bloco.largura &&
                    bloco.x <= obj.x + obj.largura &&
                    obj.y <= bloco.y + bloco.altura) {

                    bloco.colidindo = true

                    setTimeout(function () {
                        bloco.colidindo = false;
                    }, 500);

                    if (bloco.vidas >= 1)
                        bloco.vidas--;

                    else {
                        estadoAtual = estados.perdeu
                    }
                }

                else if (obj.x <= 0 && !obj._scored) {
                    bloco.score++;
                    obj._scored = true;

                    if (faseAtual < pontosParaNovaFase.length &&
                        bloco.score == pontosParaNovaFase[faseAtual])
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

        desenha: function () {
            for (var i = 0, tam = this._obs.length; i < tam; i++) {
                var obj = this._obs[i];

                obj.sprite.desenha(obj.x, obj.y);
            }
        }
    };

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    document.addEventListener("mousedown", Clique);

    estadoAtual = estados.jogar;

    record = localStorage.getItem("record");

    if (record == null)
        record = 0;

    img = new Image();
    img.src = "imagens/sheet.png";

    roda();
}

//inicializa o jogo


main();
//