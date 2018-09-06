function GameSpace(canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext("2d");
  this.fps = 60;
  this.rounds = 1;

  //this.framesCounter = 0;

  this.reset();
  this.setListeners();
}

GameSpace.prototype.gameStart = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      //this.framesCounter++;
      //if (this.framesCounter > 10000) {
      //  this.framesCounter = 0;
      //}
      this.moveAll();
      this.draw();
      this.isCollision();

      // new code

      // if (this.isCollision()) {
      //   if(this.plDie)
      //     console.log('Player Left die'); //pendiente

      //   if (this.prDie)
      //     console.log('Player Right die'); // pendiente
      // }
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

GameSpace.prototype.gameOver = function() {
  this.gameStop();
  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.gameStart();
  }
};

GameSpace.prototype.reset = function() {
  this.background = new Background(this);
  this.playerLeft = new Player(this, 20, "img/cannon-left.png");
  this.playerRight = new Player(this, 840, "img/cannon-right.png");
  this.bulletLeft = new Bullet(
    this,
    this.playerLeft.x + 92,
    this.playerLeft.y + 36
  );
  this.bulletRight = new Bullet(
    this,
    this.playerRight.x + 46,
    this.playerRight.y + 36
  );

  //this.framesCounter = 0;

  //players new Players(this)
  // obstaculos
  // this.scores = 0;
};

GameSpace.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 68:
      case 100:
        if (this.playerLeft.x <= 110) {
          this.playerLeft.dx = 10;
          this.bulletLeft.dx = 10;
        }
        break;
      case RIGHT_ARROW:
        if (this.playerRight.x <= 850) {
          this.playerRight.dx = 10;
          this.bulletRight.dx = 10;
        }
        break;
      case 65:
      case 97:
        if (this.playerLeft.x >= 10) {
          this.playerLeft.dx = -10;
          this.bulletLeft.dx = -10;
        }
        break;
      case LEFT_ARROW:
        if (this.playerRight.x >= 760) {
          this.playerRight.dx = -10;
          this.bulletRight.dx = -10;
        }
        break;
      case SAPCE:
        this.bulletLeft.icre = 1;
        this.bulletLeft.shootBullet(1, 65, 7);
        this.bulletRight.icre = 1;
        this.bulletRight.shootBullet(-1, 80, 7);
        break;
      case UP_ARROW:
        this.bulletRight.phi++;
        if (this.bulletRight.phi > 90) this.bulletRight.phi = 90;
        break;
      case DOWN_ARROW:
        this.bulletRight.phi--;
        if (this.bulletRight.phi < 0) this.bulletRight.phi = 0;
        break;
      case 119:
      case 87:
        this.bulletLeft.phi++;
        if (this.bulletLeft.phi > 90) this.bulletLeft.phi = 90;
        break;
      case 115:
      case 83:
        this.bulletLeft.phi--;
        if (this.bulletLeft.phi < 0) this.bulletLeft.phi = 0;
        break;
    }
  }.bind(this);
};

GameSpace.prototype.isCollision = function() {
  this.plpx = this.playerLeft.x;
  this.plw = this.playerLeft.w;
  this.plpy = this.playerLeft.y;
  this.plh = this.playerLeft.h;
  this.brpx = this.bulletRight.x;
  this.brpy = this.bulletRight.y;
  this.plDie = this.playerLeft.pDie;

  if (
    this.brpx >= this.plpx &&
    this.brpx <= this.plpx + this.plw &&
    this.brpy >= this.plpy &&
    this.brpy <= this.plpy + this.plh
  ) {
    this.plDie = true;
    this.playerRight.score++;
    delete this.bulletRight.x;
    delete this.bulletRight.y;
  }

  this.prpx = this.playerRight.x;
  this.prw = this.playerRight.w;
  this.prpy = this.playerRight.y;
  this.prh = this.playerRight.h;
  this.blpx = this.bulletLeft.x;
  this.blpy = this.bulletLeft.y;
  this.prDie = this.playerRight.pDie;

  if (
    this.blpx >= this.prpx &&
    this.blpx <= this.prpx + this.prw &&
    this.blpy >= this.prpy &&
    this.blpy <= this.prpy + this.prh
  ) {
    this.prDie = true;
    this.playerLeft.score++;
    delete this.bulletLeft.x;
    delete this.bulletLeft.y;
  }

  return this.prDie || this.plDie;
};

//GameSpace.prototype.generateObstacle = function(){};

//GameSpace.prototype.clearObstacle = function(){};

GameSpace.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvasSpace.width, this.canvasSpace.height);
};

GameSpace.prototype.draw = function() {
  this.background.draw();
  this.playerLeft.draw();
  this.playerRight.draw();
  this.bulletLeft.draw("#b7b511");
  this.bulletRight.draw("#349e0b");

  this.drawScore();
};

GameSpace.prototype.moveAll = function() {
  //this.background.move();  // mover o cambiar bacground
  this.playerLeft.move();
  this.playerRight.move();
  this.bulletLeft.move();
  this.bulletRight.move();

  // rotate image
};

GameSpace.prototype.drawScore = function() {
  this.ctx.font = "20px system-ui";
  this.ctx.fillStyle = "#b7b511";
  this.ctx.fillText("Player One", 30, 40);
  this.ctx.fillText(this.playerLeft.score, 40, 65);
  this.ctx.fillText(Math.round(this.bulletLeft.phi).toString() + "gra", 40, 90);

  this.ctx.fillStyle = "#349e0b";
  this.ctx.fillText("Player Two", 850, 40);
  this.ctx.fillText(this.playerRight.score, 860, 65);
  this.ctx.fillText(
    Math.round(this.bulletRight.phi).toString() + "gra",
    860,
    90
  );

  this.ctx.font = "30px Roboto";
  this.ctx.fillStyle = "#3fa7e4";
  this.ctx.fillText("Ironhack", 450, 30);
  this.ctx.fillText("Cannon War", 420, 55);
};
