//import { estadoAtual, estados, obstaculos, chao, bloco } from './Game.js';
import * as Game from './Game.js';
import * as Stats from "./Status.js";
export function atualiza() {
    if (Game.estadoAtual == Stats.estados.jogando)
       // teste Game.estadoAtual == Game.estados.jogando;
        Game.obstaculos.atualiza();

    Game.chao.atualiza();
    Game.bloco.atualiza();
}
//
