function GameSpace (canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext('2d');
  this.fps = 60;

  this.reset();  
}

GameSpace.prototype.gameStart = function(){
  this.interval = setInterval(function(){
    this.clear();
    this.draw();

    //this.framesCounter++;  // add cuadros
    // add obstaculos
    // add score
    //añadir movimientos y dibujos
    //eliminar obstaculos
    // revisar colisiones

  }.bind(this), 1000/this.fps);
};

GameSpace.prototype.gameStop = function(){
  clearInterval(this.interval);
};

//GameSpace.prototype.gameOver = function(){};

GameSpace.prototype.reset = function(){
  this.background = new Background(this);
  //players new Players(this)
  // this.framesCounter = 0;
  // obstaculos
  // this.scores = 0;
};

//GameSpace.prototype.isCollision = function(){};

//GameSpace.prototype.generateObstacle = function(){};

//GameSpace.prototype.clearObstacle = function(){};

GameSpace.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvasSpace.width, this.canvasSpace.height);  
};

GameSpace.prototype.draw = function(){
  this.background.draw();
};

//GameSpace.prototype.moveAll = function(){};

//GameSpace.prototype.drawScore = function(){};