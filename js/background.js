function Background (game) {
  this.game = game;

  this.img = new Image();
  this.img.src = 'img/jupiter-europa-1.jpg';

  this.x = 0;
  this.y = 0;
   
  this.dx = 10; // movimiento escenario en x
  this.dy = 10; // movimiento escenario en y
}

Background.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvasSpace.width, this.game.canvasSpace.height);
  
  //this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
};

/* 
Background.prototype.move = function(){
  this.x -= this.dx;

  if (this.x < -this.game.canvas.width) this.x = 0;

}
*/

