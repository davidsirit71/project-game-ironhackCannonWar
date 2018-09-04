function GameSpace(canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext("2d");
  this.fps = 60;

  this.reset();

  this.playerRight.setListeners(); //
  this.playerLeft.setListeners();  //
}

GameSpace.prototype.gameStart = function() {
  this.interval = setInterval(
    function() {
      this.clear();

      //this.framesCounter++;  // add cuadros
      //if (this.framesCounter > 1000){
      //  this.framesCounter = 0;
      //}

      this.moveAll();
      this.draw();

      // add obstaculos
      // add score

      //añadir movimientos y dibujos

      //eliminar obstaculos
      // revisar colisiones
    }.bind(this),
    10000 / this.fps
  );
};

GameSpace.prototype.gameStop = function() {
  clearInterval(this.interval);
};

//GameSpace.prototype.gameOver = function(){};

GameSpace.prototype.reset = function() {
  this.background = new Background(this);
  this.playerLeft = new Player(this, 20, 'img/cannon-left.png');
  this.playerRight = new Player(this, 840, 'img/cannon-right.png');

  this.framesCounter = 0;

  //players new Players(this)
  // obstaculos
  // this.scores = 0;
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
};

GameSpace.prototype.moveAll = function() {
  //this.background.move();  // mover o cambiar bacground
  this.playerLeft.move();
  this.playerRight.move();
};

//GameSpace.prototype.drawScore = function(){};
