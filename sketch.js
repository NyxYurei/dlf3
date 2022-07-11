var canvas
var menu; 

//player vars
var player,  playeridleImg, playeridleLImg, playerImgL, playerImgR ;

//background vars
var back, backImg, hurtBgImg;

var ground, groundImg, cristal, plataform1, plataform2, plataform3, plataform4, p1Img, p2Img, p3Img, p4Img;
var gamewall, gamewall1, gamewall2, gamewall3, gameplataform;

var lifes = 5;
var score = 0;
var gameState = 1;


 function preload(){ 
  //player images
  playeridleImg = loadAnimation ("./assets/idle1.png", "./assets/idle2.png", "./assets/idle3.png", "./assets/idle4.png", "./assets/idle5.png", "./assets/idle6.png", "./assets/idle7.png", "./assets/idle8.png");
  playeridleLImg = loadAnimation ("./assets/idleL1.png", "./assets/idleL2.png", "./assets/idleL3.png", "./assets/idleL4.png", "./assets/idleL5.png", "./assets/idleL6.png", "./assets/idleL7.png", "./assets/idleL8.png");
  playerImgR = loadAnimation ("./assets/walkR1.png", "./assets/walkR2.png", "./assets/walkR3.png", "./assets/walkR4.png", "./assets/walkR5.png")
  playerImgL = loadAnimation ("./assets/walkL1.png", "./assets/walkL2.png", "./assets/walkL3.png", "./assets/walkL4.png", "./assets/walkL5.png")
  //background images
  backImg = loadImage ("./assets/Background.png");
 
  groundImg = loadImage ("./assets/ground.png");
  
  p1Img = loadImage ("./assets/plataform.png");
  p2Img= loadImage ("./assets/plataform.png");
  p3Img= loadImage ("./assets/plataform.png");
  p4Img= loadImage ("./assets/plataform.png");

 }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  

  
   back = new BackGround();
   back.display();
   player = new Player();
   game = new Game();
   game.start();
   game.play();

   

}

 function draw() {
    background("black");
    console.log(gameState);  
    player.playerCollide()
 
   if(gameState == 1){
    game.play();
   }
    
   if(gameState == 2){
     game.F1();
   }

   if(gameState == 3){
    game.F2();
  }

  if(gameState == 4){
    game.FB();
  }

  if(gameState == 5){
    game.lost();
  }  

  if(gameState == 6){
    game.Win();
  }


    drawSprites();
    textSize(40);
    fill(rgb(120, 88, 166));
    textFont("Impact");
    text ("score: "+ score, 10, 55);
   
    textSize(40);
    fill(rgb(120, 88, 166));
    textFont("Impact");
    text ("Lifes left: "+ lifes, 10, 105);
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}