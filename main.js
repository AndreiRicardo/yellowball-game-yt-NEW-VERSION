import { char } from './char.js';
import { floor } from './floor.js';
import { obstaculos } from './obstaculos.js';
import { estados, clique, passarDeFase } from './game.js';
import { labelNovaFase } from './labelNovaFase.js';

let ALTURA, LARGURA, canvasTela, contexto, record, img;
let estadoAtual

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }

    canvasTela = document.createElement("canvas");
    canvasTela.width = LARGURA;
    canvasTela.height = ALTURA;
    canvasTela.style.border = "1px solid #000";

    contexto = canvasTela.getContext("2d");
    document.body.appendChild(canvasTela);

    document.addEventListener("mousedown", clique);

    estadoAtual = estados.jogar;

    record = localStorage.getItem("record") || 0;

    img = new Image();
    img.src = "Assets/sheet.png"; // Atualizando o caminho para o PNG

    running();
}

function running() {
    upDate();
    drawing();

    window.requestAnimationFrame(running);
}

function upDate() {
    if (estadoAtual === estados.jogando) {
        obstaculos.upDate();
    }

    floor.upDate();
    char.upDate();
}

function drawing() {
    contexto.fillStyle = "#87CEEB"; // Cor de fundo
    contexto.fillRect(0, 0, LARGURA, ALTURA); // Desenha fundo

    // Mostra a pontuação e as vidas
    contexto.fillStyle = "#fff";
    contexto.font = "50px Arial";
    contexto.fillText(char.score, 30, 68);
    contexto.fillText(char.vidas, 540, 68);

    // Exibe o texto de nova fase com opacidade variável
    contexto.fillStyle = `rgba(0, 0, 0, ${labelNovaFase.opacidade})`;
    contexto.fillText(labelNovaFase.texto, canvasTela.width / 2 - contexto.measureText(labelNovaFase.texto).width / 2, canvasTela.height / 3);

    // Desenho dos obstáculos, chão e personagem
    obstaculos.drawing(contexto);
    floor.drawing(contexto);
    char.drawing(contexto);
}

main();
