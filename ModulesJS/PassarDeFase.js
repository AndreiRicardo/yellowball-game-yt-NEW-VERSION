/* import { VELOCIDADE, faseAtual, bloco, labelNovaFase } from './Game.js'; */
import * as Game from './Game.js';
export function passarDeFase() {
    Game.VELOCIDADE++;
    Game.faseAtual++;
    Game.bloco.vidas++;

    if (Game.faseAtual == 4)
        Game.bloco.gravidade *= 0.6;

    Game.labelNovaFase.texto = "Level " + Game.faseAtual;
    Game.labelNovaFase.fadeIn(0.4);

    setTimeout(function () {
        Game.labelNovaFase.fadeOut(0.4);
    }, 800);
}
//
