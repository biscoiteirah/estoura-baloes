var arco;
var fundo;
var flecha;
var balaoverde;
var balaovermelho;
var balaorosa;
var balaoazul;
var arcoImage; 
var flechaImage;
var balaoverdeImage;
var balaovermelhoImage;
var balaorosaImage;
var balaoazulImage;
var backgroundImage;
var score=0;

function preload(){

backgroundImage= loadImage("background0.png");
flechaImage= loadImage("arrow0.png");
arcoImage= loadImage("bow0.png");
balaoverdeImage= loadImage("green_balloon0.png");
balaorosaImage= loadImage("pink_balloon0.png");
balaoazulImage= loadImage("blue_balloon0.png");
balaovermelhoImage= loadImage("red_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  fundo= createSprite(0,0,400,400);
  fundo.addImage(backgroundImage);
  fundo.scale = 2.5
  
  // criando arco para atirar flecha
  arco= createSprite(380,220,20,50);
  arco.addImage(arcoImage); 
  arco.scale = 1;
  
   score = 0
}

function draw() {
 background(0);
  // movendo chão
  fundo.velocityX = -3 

    if (fundo.x < 0){

      //recarrega o plano de fundo
      fundo.x = fundo.width/2;
    }
  
  //movendo flecha
  arco.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createFlecha();
    
  }
  
  var select_balloon= Math.round (random (1,4));
  
  //criando inimigos continuamente
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
     gerarBalaovermelho();
    } else if (select_balloon == 2) {
     gerarBalaoverde();
    } else if (select_balloon == 3) {
     gerarBalaoazul();
    } else {
      gerarBalaorosa();
    }
  }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50)
}


// Criando flechas para arco
 function createFlecha() {

  flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(flechaImage);
  flecha.x= 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}

 function gerarBalaovermelho() {

balaovermelho= createSprite (0,Math.round (random (20,250),50,10,10));
balaovermelho.addImage (balaovermelhoImage);
balaovermelho.velocityX= 5;
balaovermelho.lifetime= 200;
balaovermelho.scale= 0.1;
 }

 function gerarBalaoverde() {

balaoverde= createSprite (0,Math.round (random (20,250),50,10,10));
balaoverde.addImage (balaoverdeImage);
balaoverde.velocityX= 5;
balaoverde.lifetime= 200;
balaoverde.scale= 0.1;
   }

   function gerarBalaorosa() {

    balaorosa= createSprite (0,Math.round (random (20,250),50,10,10));
    balaorosa.addImage (balaorosaImage);
    balaorosa.velocityX= 5;
    balaorosa.lifetime= 200;
  
     }

     function gerarBalaoazul() {

      balaoazul= createSprite (0,Math.round (random (20,250),50,10,10));
      balaoazul.addImage (balaoazulImage);
      balaoazul.velocityX= 5;
      balaoazul.lifetime= 200;
      balaoazul.scale= 0.1;
       }