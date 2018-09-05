function Bullet(game, x0, y0, v0, phi) {
  this.game = game;
  this.x = x0;
  this.y = y0;
  this.r = 7; // ball cannon radius
  this.v0 = v0;
  this.phi = phi * Math.PI / 180;
  this.gra = 9.8;
  this.dx = 0;
  this.xt = 0;
  this.yt = 0;
}

Bullet.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = 'yellow';
  this.game.ctx.arc(this.x, this.y, this.r , 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
};

Bullet.prototype.move = function() {
  this.x += (this.xt + this.dx);
  this.dx = 0;
  this.xt = 0;
  this.y += this.yt;
  this.yt = 0;
};

Bullet.prototype.newPos = function() {
  this.xt = 0; // v0 * Math.cos(phi) * TIMEPO //+ x0;
  this.yt = 0; //v0 * Math.sin(phi) * TIEMPO - 0.5 * this.gra * TIEMPO * TIEMPO //+ y0;

};
