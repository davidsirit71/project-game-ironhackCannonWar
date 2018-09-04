function Bullet(game, x0, y0, v0, phi) {
  this.game = game;
  this.x = x0;
  this.y = y0;
  this.r = 10; // ball cannon radius
  this.v0 = v0;
  this.phi = phi;
  this.gra = 9.8;

  this.xt = v0 * Math.cos(phi) * TIMEPO + x0;
  this.yt = v0 * Math.sin(phi) * TIEMPO - 0.5 * this.gra * TIEMPO * TIEMPO + y0;
}

Bullet.prototype.draw = function() {
  this.game.ctx.context.beginPath();
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.arc(this.x, this.y, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.context.closePath();
};

Bullet.prototype.move = function() {
  this.x += this.xt;
  this.y += this.yt;
};
