import { estadoAtual, estados, bloco, ALTURA, obstaculos } from './Game';

export function clique(event) {
    if (estadoAtual == estados.jogar) {
        estadoAtual = estados.jogando;
        frames = 0;
    }

    else if (estadoAtual == estados.perdeu && bloco.y >= 2 * ALTURA) {
        estadoAtual = estados.jogar;
        obstaculos.limpa();
        bloco.reset();
    }

    else if (estadoAtual == estados.jogando)
        bloco.pula();
}
