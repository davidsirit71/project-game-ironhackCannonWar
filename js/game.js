function GameSpace(canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext("2d");
  this.fps = 60;
  this.framesCounter = 0; 


  this.reset();
  this.setListeners();
}

GameSpace.prototype.gameStart = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.framesCounter++; 
      if (this.framesCounter > 10000){
        this.framesCounter = 0;
      }
      this.moveAll();
      this.draw();
      // add obstaculos
      // add score
      //añadir movimientos y dibujos
      //eliminar obstaculos
      // revisar colisiones
    }.bind(this),
    1000 / this.fps
  );
};

GameSpace.prototype.gameStop = function() {
  clearInterval(this.interval);
};

//GameSpace.prototype.gameOver = function(){};

GameSpace.prototype.reset = function() {
  this.background = new Background(this);
  this.playerLeft = new Player(this, 20, "img/cannon-left.png");
  this.playerRight = new Player(this, 840, "img/cannon-right.png");
  this.bulletLeft = new Bullet(
    this,
    this.playerLeft.x + 92,
    this.playerLeft.y + 36,
    0,
    60
  );
  this.bulletRight = new Bullet(
    this,
    this.playerRight.x + 46,
    this.playerRight.y + 36,
    0,
    45
  );

  this.framesCounter = 0;

  //players new Players(this)
  // obstaculos
  // this.scores = 0;
};

GameSpace.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 68:
      case 100:
        this.playerLeft.dx = 10;
        this.bulletLeft.dx = 10;
        break;
      case RIGHT_ARROW:
        this.playerRight.dx = 10;
        this.bulletRight.dx = 10;
        //(this.x > 0 && this.x < 110)? this.dx +=10 : this.dx +=0;
        break;

      case 65:
      case 97:
        this.playerLeft.dx = -10;
        this.bulletLeft.dx = -10;
        break;
      case LEFT_ARROW:
        this.playerRight.dx = -10;
        this.bulletRight.dx = -10;
        //(this.x > 20 && this.x < 250)? this.dx -=10 : this.dx +=0;
        break;
      case SAPCE:
        //this.bulletLeft.baseTime();
        this.bulletLeft.newPosInTime(1);
        //this.bulletRight.baseTime();
        this.bulletRight.newPosInTime(-1);
        //this.shoot();
        break;
    }
  }.bind(this);
};

//GameSpace.prototype.isCollision = function(){};

//GameSpace.prototype.generateObstacle = function(){};

//GameSpace.prototype.clearObstacle = function(){};

GameSpace.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvasSpace.width, this.canvasSpace.height);
};

GameSpace.prototype.draw = function() {
  this.background.draw();
  this.playerLeft.draw();
  this.playerRight.draw();
  this.bulletLeft.draw();
  this.bulletRight.draw();
};

GameSpace.prototype.moveAll = function() {
  //this.background.move();  // mover o cambiar bacground
  this.playerLeft.move();
  this.playerRight.move();
  this.bulletLeft.move();
  this.bulletRight.move();

  // rotate image
};

//GameSpace.prototype.drawScore = function(){};
