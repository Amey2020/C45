var canvas,database,gameState;
var form,player,playerCount;
var allPlayers;
function setup() {
  createCanvas(windowWidth,windowHeight);
  game=new Game();
  game.start();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}