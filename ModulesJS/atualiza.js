import { estadoAtual, estados, obstaculos, chao, bloco } from './Game';

export function atualiza() {
    if (estadoAtual == estados.jogando)
        obstaculos.atualiza();

    chao.atualiza();
    bloco.atualiza();
}
