function Background(game, backImage) {
  this.game = game;

  this.img = new Image();
  this.img.src = backImage; // ojo

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

