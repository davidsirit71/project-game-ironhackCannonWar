# Ironhack Project game CannonWar


***
My biggest problem was how to simulate the parabolic throw...
***



```javascript
function Bullet(game, x0, y0) {
  .
  .
  .
  this.icre = 1;
}


GameSpace.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
    .
    .
    .
    case SAPCE:
        this.bulletLeft.icre = 1;
        this.bulletLeft.shootBullet(1, 120, 21);
        this.bulletRight.icre = 1;
        this.bulletRight.shootBullet(-1, 120, 21);
        break;
    .
    .
    .
    }.bind(this);
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
```
***
Pendientes:
***
    • Usar transición  a  otros escenarios. Permitir la modificación de otras variables como velocidad y gravedad. 
    • Creacion de otros niveles de juego.
