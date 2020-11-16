
export function desenha() {
  bg.desenha(0, 0);
  ctx.fillStyle = "#fff";
  ctx.font = "50px Arial";
  ctx.fillText(bloco.score, 30, 68);
  ctx.fillText(bloco.vidas, 540, 68);
  ctx.fillStyle = "rgba(0, 0, 0, " + labelNovaFase.opacidade + ")";
  ctx.fillText(labelNovaFase.texto, canvas.width / 2 - ctx.measureText(labelNovaFase.texto).width / 2, canvas.height / 3);
  if (estadoAtual == estados.jogando) obstaculos.desenha();
  chao.desenha();
  bloco.desenha();
  if (estadoAtual == estados.jogar) jogar.desenha(LARGURA / 2 - jogar.largura / 2, ALTURA / 2 - jogar.altura / 2);

  if (estadoAtual == estados.perdeu) {
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
