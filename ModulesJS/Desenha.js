

import {
  Sprite, bg, spriteBoneco, perdeu, jogar, novo, spriteRecord,
  spriteChao, redObstacle, pinkObstacle, blueObstacle, greenObstacle, yellowObstacle
} from "./Sprite.js";
import * as Game from "./Game.js";

export function desenha() {
  bg.desenha(0, 0);
  Game.ctx.fillStyle = "#fff";
  Game.ctx.font = "50px Arial";
  Game.ctx.fillText(Game.bloco.score, 30, 68);
  Game.ctx.fillText(Game.bloco.vidas, 540, 68);
  Game.ctx.fillStyle = "rgba(0, 0, 0, " + Game.labelNovaFase.opacidade + ")";
  Game.ctx.fillText(Game.labelNovaFase.texto, Game.canvas.width / 2 - Game.ctx.measureText(Game.labelNovaFase.texto).width / 2, Game.canvas.height / 3);
  if (Game.estadoAtual == Game.estados.jogando) Game.obstaculos.desenha();
  Game.chao.desenha();
  Game.bloco.desenha();
  if (Game.estadoAtual == Game.estados.jogar) jogar.desenha(Game.LARGURA / 2 - jogar.largura / 2, Game.ALTURA / 2 - jogar.altura / 2);

  if (Game.estadoAtual == Game.estados.perdeu) {
    perdeu.desenha(LARGURA / 2 - perdeu.largura / 2, ALTURA / 2 - perdeu.altura / 2 - spriteRecord.altura / 2);
    spriteRecord.desenha(LARGURA / 2 - spriteRecord.largura / 2, ALTURA / 2 + perdeu.altura / 2 - spriteRecord.altura / 2 - 25);
    ctx.fillStyle = "#fff";
    ctx.fillText(bloco.score, 375, 390);

    if (bloco.score > record) {
      novo.desenha(LARGURA / 2 - 180, ALTURA / 2 + 30);
      ctx.fillText(bloco.score, 420, 470);
    } else ctx.fillText(record, 420, 470);
  }
}

// no fim importei game como Game e todos seu objetos e o jogo esta quase todo refatorado,
// aogora todas as funções se comportam como metodos
// falata fazer o mesmo com metodo clique e terminar a refatoração
//
