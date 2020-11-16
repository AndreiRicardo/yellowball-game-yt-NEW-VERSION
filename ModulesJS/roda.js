import { atualiza } from './atualiza';
import { desenha } from './Desenha.js';

export function roda() {
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);
}
