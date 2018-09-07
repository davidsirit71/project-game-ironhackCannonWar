function Background(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "img/jupiter-europa-1.jpg";

  this.x = 0;
  this.y = 0;

}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.game.canvasSpace.width,
    this.game.canvasSpace.height
  );

};

