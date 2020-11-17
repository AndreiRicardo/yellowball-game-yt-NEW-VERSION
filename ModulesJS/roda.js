import { atualiza } from './Atualiza.js';
import { desenha } from './Desenha.js';

export function roda() {
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);
}
