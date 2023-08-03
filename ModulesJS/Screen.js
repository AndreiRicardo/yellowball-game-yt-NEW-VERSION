/* var canvas,
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
} */

export function sCreen() {
  console.log("tem qu sair alguma caralha dessa porra aqui tmbm");
// propriendades
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
// configuração

  canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = "1px solid #000";
  canvas.style.backgroundColor = "blue";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
}
