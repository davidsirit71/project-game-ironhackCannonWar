function GameSpace(canvadId) {
  this.canvasSpace = document.getElementById(canvadId);
  this.ctx = this.canvasSpace.getContext("2d");
  this.fps = 60;
  this.rounds = 1;

  this.reset();
  this.setListeners();
}

GameSpace.prototype.gameStart = function() {
  this.interval = setInterval(
    function() {
      this.clear();

      this.moveAll();
      this.draw();
      this.isCollision();

      if (this.bulletLeft.x > 1000 || this.bulletRight.y > 580) {
        this.bulletLeft = new Bullet(
          this,
          this.playerLeft.x + 92,
          this.playerLeft.y + 36
        );
      }
      if (this.bulletRight.x < 0 || this.bulletRight.y > 580) {
        this.bulletRight = new Bullet(
          this,
          this.playerRight.x + 46,
          this.playerRight.y + 36
        );
      }
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
  this.playerLeft = new Player(this, 20, "img/cannones-izq.png");
  this.playerRight = new Player(this, 840, "img/cannones-der.png");
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
        this.bulletLeft.shootBullet(1, 70, 7);
        this.bulletRight.icre = 1;
        this.bulletRight.shootBullet(-1, 70, 7);
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
  if (this.plDie === true) {
    this.bulletRight = new Bullet(
      this,
      this.playerRight.x + 46,
      this.playerRight.y + 36
    );
  }

  if (this.prDie === true) {
    this.bulletLeft = new Bullet(
      this,
      this.playerLeft.x + 92,
      this.playerLeft.y + 36
    );
  }

  if (this.prDie === true || this.plDie) {
    this.background.img.src("/img/No-Mans-Sky-.jpg");
    this.bulletLeft.gra = 15;
    this.bulletRight.gra = 15;
    this.bulletLeft.v0 = 120;
    this.bulletRight.v0 = 120;
  }

  return this.prDie || this.plDie;
};

GameSpace.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvasSpace.width, this.canvasSpace.height);
};

GameSpace.prototype.draw = function() {
  this.background.draw();
  this.bulletLeft.draw("#b7b511");
  this.bulletRight.draw("#349e0b");
  if (this.bulletLeft.phi >= 0 && this.bulletLeft.phi < 30)
    this.playerLeft.sx = 0;
  if (this.bulletLeft.phi >= 30 && this.bulletLeft.phi < 60)
    this.playerLeft.sx = 160;
  if (this.bulletLeft.phi >= 60 && this.bulletLeft.phi <= 90)
    this.playerLeft.sx = 319;
  this.playerLeft.draw();
  if (this.bulletRight.phi >= 0 && this.bulletRight.phi < 30)
    this.playerRight.sx = 290;
  if (this.bulletRight.phi >= 30 && this.bulletRight.phi < 60)
    this.playerRight.sx = 144;
  if (this.bulletRight.phi >= 60 && this.bulletRight.phi <= 90)
    this.playerRight.sx = 0;
  this.playerRight.draw();
  this.drawScore();
};

GameSpace.prototype.moveAll = function() {
  this.playerLeft.move();
  this.playerRight.move();
  this.bulletLeft.move();
  this.bulletRight.move();
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
