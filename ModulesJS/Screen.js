var canvas,
  ctx,
  LARGURA,
  ALTURA,
  img = new Image();

img.src = "Assets/sheet.png";
ALTURA = window.innerHeight;
LARGURA = window.innerWidth;

if (LARGURA >= 500) { // verificando o tamanho da window w forçando ao tamanho que agente quer
  LARGURA = 1200;
  ALTURA = 600;
}

function sCreen() {
  console.log("tem qu sair alguma caralha dessa porra aqui tmbm");

  canvas = document.createElement("canvas"); // criando a canvas
  //-------- propriedades da canvas
  // ao usar o metodo style estou configurando por css diretamente
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.border = "1px solid #000";
  canvas.style.backgroundColor = "blue";
  ctx = canvas.getContext("2d");/ / colocando a canvas num contexto nesse caso o que for desenhado aqui eh pra esse objeto
 /*  canvas.getContext("2d"); */
  document.body.appendChild(canvas); // aqui estou inserindo a cabvas no body do html

  // alterando propriedades da barra do scroll
  document.body.style.overflow = "hidden"; // em caso voce queira remover ou deixar os scroll da tela basta manter (scroll removido) ou remover esta linha que devolve as scrolls .
}
export { sCreen };
