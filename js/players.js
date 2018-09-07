var SAPCE = 32;
var UP_ARROW = 38;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;

function Player(game, x, pathImg) {
  this.game = game;
  this.img = new Image();
  this.img.src = pathImg;
  this.w = 140;
  this.h = 121;
  this.x = x;
  this.y = this.game.canvasSpace.height - this.h - 30;
  this.dx = 0;
  this.pDie = false;  
  this.score = 0;
  this.sx = 0; 
  this.sy = 0;
  this.sw = 140; 
  this.sh = 121; 
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(this.img,this.sx,this.sy,this.sw,this.sh, this.x, this.y, this.w, this.h);
};

Player.prototype.move = function() {
  this.x += this.dx;
  this.dx = 0;
};
