function Bullet(game, x0, y0) {
  this.game = game;
  this.x = x0;
  this.y = y0;
  this.r = 7;
  this.v0 = 0;
  this.phi = 0;
  this.phiRad =0;
  this.gra = 10;
  this.dx = 0;
  this.xt = 0;
  this.yt = 0;
  this.yt2 = 0;
  this.fps = 60;
  this.icre = 1;
}

Bullet.prototype.draw = function(bColor) {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = bColor;
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
};

Bullet.prototype.move = function() {
  this.x += this.xt + this.dx;
  this.dx = 0;
  this.icre++;
  this.y -= this.yt + (this.yt2 * this.icre * this.icre) / 360;
};

Bullet.prototype.shootBullet = function(dirX, v0, grav) {
  this.v0 = v0 / this.fps;
  this.phiRad = this.phi * Math.PI/180;
  this.gra = grav / 3600;
  this.xt = dirX * (this.v0 * Math.cos(this.phiRad));
  this.yt = this.v0 * Math.sin(this.phiRad);
  this.yt2 = -1 * (0.5 * this.gra);
};
