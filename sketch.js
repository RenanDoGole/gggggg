//variáveis  da bolinha
let xBolinha= 300;
let yBolinha= 200;
let diametro= 30;
let raio = diametro / 2;
let velocidadexBolinha =6;
let velocidadeyBolinha =6;
//variáveis da minhaRaquete
let xminhaRaquete= 20;
let yminhaRaquete= 150;
let larguraMinhaRaquete=10;
let alturaMinhaRaquete=100;

// Função do dimenção do fundo
function setup() {
  createCanvas(600, 400);
}
// Função dimenção do fundo
function draw() {
  background(0);
bolinha ()
  minhaRaquete(0);
  }

function bolinha(){
 circle (xBolinha,yBolinha, diametro)
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha -raio < 0){
    velocidadeyBolinha *= -1; 
}
}
function minhaRaquete(){
  rect (xminhaRaquete, yminhaRaquete, larguraMinhaRaquete, alturaMinhaRaquete);
  if(keyIsDown(UP_ARROW)){
    yminhaRaquete -= 10
  }
  
      if(keyIsDown(DOWN_ARROW)){
    yminhaRaquete += 10
  }
}