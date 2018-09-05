function Bullet(game, x0, y0, v0, phi) {
  this.game = game;
  this.x = x0;
  this.y = y0;
  this.r = 7; // ball cannon radius
  this.v0 = v0;
  this.phi = (phi * Math.PI) / 180;
  this.gra = 15;
  this.dx = 0;
  this.xt = 0;
  this.yt = 0;
  this.yt2 =0;
  this.timeInAir = 0;
  this.fps = 60;
  this.icre = 1;
}

Bullet.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
};

Bullet.prototype.move = function() {
  this.x += this.xt + this.dx;
  this.dx = 0;
  //this.xt = 0;
  this.icre++;
  this.y -= this.yt + this.yt2*this.icre*this.icre/360;
};

Bullet.prototype.newPosInTime = function(dirX) {
  this.v0 = 100 / this.fps;
  this.gra = this.gra / 3600;
  //console.log(this.game.framesCounter);
  this.xt = dirX * (this.v0 * Math.cos(this.phi));
  this.yt = this.v0 * Math.sin(this.phi) ; //+ y0;<<<<
  this.yt2 = -1 * (0.5 * this.gra);
};

// Bullet.prototype.baseTime = function() {
//   this.intervalBullet = setInterval(
//     function() {
//       this.timeInAir++;
//       if (this.timeInAir > 10000) {
//         this.timeInAir = 0;
//       }
//     }.bind(this),
//     1000 / this.fps
//   );
// };

Bullet.prototype.stopTime = function() {
  clearInterval(this.intervalBullet);
};
