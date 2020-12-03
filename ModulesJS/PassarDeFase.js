import { VELOCIDADE, faseAtual, bloco, labelNovaFase } from './Game.js';

export function passarDeFase() {
    VELOCIDADE++;
    faseAtual++;
    bloco.vidas++;

    if (faseAtual == 4)
        bloco.gravidade *= 0.6;

    labelNovaFase.texto = "Level " + faseAtual;
    labelNovaFase.fadeIn(0.4);+

    setTimeout(function () {
        labelNovaFase.fadeOut(0.4);
    }, 800);
}
//
