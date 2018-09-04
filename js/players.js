var SAPCE = 32;
var UP_ARROW = 38;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;

function PlayerOne(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = "img/cannon-left.png";
  this.w = 140;
  this.h = (this.w * 470) / 600;
  this.x = this.game.canvasSpace.width * 0.02;
  this.y = this.game.canvasSpace.height - this.h - 30;
  this.dx = 0;

  // introducir numero de imagenes diferentes

  // teclas que pisa el susuario
  this.setListeners();
}

PlayerOne.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

PlayerOne.prototype.move = function() {
  this.x = this.x + this.dx;
};

PlayerOne.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 68:
      case 100:
        this.dx -= 10;
        //(this.x > 0 && this.x < 110)? this.dx +=10 : this.dx +=0;
        break;

      case 65:
      case 97:
        this.dx += 10;
        //(this.x > 20 && this.x < 250)? this.dx -=10 : this.dx +=0;
        break;
      //case SAPCE:
      //this.shoot();
    }
  }.bind(this);
};

function PlayerTwo(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = "img/cannon-right.png";
  this.w = 140;
  this.h = (this.w * 470) / 600;
  this.x = this.game.canvasSpace.width * 0.98 - this.w;
  this.y = this.game.canvasSpace.height - this.h - 30;
  this.dx = 0;

  // introducir numero de imagenes diferentes

  // teclas que pisa el susuario
  this.setListeners();
}

PlayerTwo.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

PlayerTwo.prototype.move = function() {
  this.x = this.x + this.dx;
};

PlayerTwo.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case RIGHT_ARROW:
        this.dx += 10;
        //(this.x > 750 && this.x < 850)? this.dx +=10 : this.dx +=0;
        break;

      case LEFT_ARROW:
        this.dx -= 10;
        //(this.x > 760 && this.x < 850)? this.dx -=10 : this.dx +=0;
        break;
      //case SAPCE:
      //this.shoot();
    }
  }.bind(this);
};
