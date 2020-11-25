//import { estadoAtual, estados, obstaculos, chao, bloco } from './Game.js';
import * as Game from './Game.js';
export function atualiza() {
    if (Game.estadoAtual == Game.estados.jogando)
       // teste Game.estadoAtual == Game.estados.jogando;
        Game.obstaculos.atualiza();

    Game.chao.atualiza();
    Game.bloco.atualiza();
}
//
