var canvas,
  ctx,
  LARGURA,
  ALTURA,
  img = new Image();

img.src = "Assets/sheet.png";
ALTURA = window.innerHeight;
LARGURA = window.innerWidth;

if (LARGURA >= 500) {
  LARGURA = 1200;
  ALTURA = 600;
}

function sCreen() {
    // rever essa config nao pode ficar aqui
  console.log("tem qu sair alguma caralha dessa porra aqui tmbm");

 

  canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.border = "1px solid #000";
  canvas.style.backgroundColor = "blue";
  /*   ctx = canvas.getContext("2d"); */ // ainda não sei onde esse cara vai mas pra construção aqui nao preciso
  canvas.getContext("2d");
  document.body.appendChild(canvas);
  // alterando propriedades do body no braço
  document.body.style.overflow = "hidden"; // em caso voce queira remover ou deixar os scroll da tela basta manter (scroll removido) ou remover esta linha que devolve as scrolls .
}
export {sCreen}