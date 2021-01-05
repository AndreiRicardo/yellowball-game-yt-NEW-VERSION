//import { estadoAtual, estados, obstaculos, chao, bloco } from './Game.js';
import * as Game from './Game.js';
import * as Status from "./Status.js";
export function atualiza() {
    if (Game.estadoAtual == Status.estados.jogando)
       // teste Game.estadoAtual == Game.estados.jogando;
        Game.obstaculos.atualiza();

    Game.chao.atualiza();
    Game.bloco.atualiza();
}
//
