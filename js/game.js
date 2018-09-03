function GameSpace (canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext('2d');
  this.fps = 60;

  this.gameReset();  
}

//GameSpace.prototype.gameStart = function(){};

//GameSpace.prototype.gameStop = function(){};

//GameSpace.prototype.gameOver = function(){};

//GameSpace.prototype.gameReset = function(){};

//GameSpace.prototype.isCollision = function(){};

//GameSpace.prototype.generateObstacle = function(){};

//GameSpace.prototype.clearObstacle = function(){};

//GameSpace.prototype.clear = function(){};

//GameSpace.prototype.draw = function(){};

//GameSpace.prototype.moveAll = function(){};

//GameSpace.prototype.drawScore = function(){};