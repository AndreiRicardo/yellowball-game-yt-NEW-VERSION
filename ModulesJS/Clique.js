//import { estadoAtual, estados, bloco, ALTURA, obstaculos } from './Game.js';
import * as Game from './Game.js';
import * as Stats from "./Stats.js";

export function Clique(event) {
    console.log("eae?")
    /* if (Game.estadoAtual == Game.estados.jogar) {
        Game.estadoAtual = Game.estados.jogando;
        frames = 0;
    }
 
    else if (Game.estadoAtual == Game.estados.perdeu && Game.bloco.y >= 2 * ALTURA) {
        Game.estadoAtual = Game.estados.jogar;
        Game.obstaculos.limpa();
        Game.bloco.reset();
    }
 
    else if (Game.estadoAtual == Game.estados.jogando) {
        Game.bloco.pula();
    }
     */
    // teste funciona ele pula Game.bloco.pula();

    Game.estadoAtual == Stats.estados.jogar ? (Game.estadoAtual = Stats.estados.jogando,
        frames = 0) : (Game.estadoAtual == Stats.estados.perdeu && Game.bloco.y >= 2 * Game.ALTURA) ? (Game.estadoAtual = Stats.estados.jogar,
            Game.obstaculos.limpa(),
            Game.bloco.reset()) : (Game.estadoAtual == Stats.estados.jogando) ? Game.bloco.pula() : console.log("num deu");

}
//
