class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.backgroundImg = new Image();
    this.backgroundImg.src = "./docs/assets/img/background-space_05.png";
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 600;
    this.player = null;
    this.controls = null;
    this.alien = [];
    this.loopX = 30;
    this.loopY = 80;
    this.loopSmallX = 45; // start position x
    this.loopSmallY = 132; // start position y
    this.intervalId = null;
    this.bullets = [];
    this.frames = 0;
    this.intervalId = null;
    this.score = 0;
    this.enemies = [];
    this.hits3X = 0;
    this.projectiles = [

    ]
  }

  //START THE GAME:
  start() {
    this.drawBackground();
    this.player = new Player(this, 200, 550, 40, 40);
    this.player.draw();
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);

    //DARW BIG ALIEN:
    for (let i = 0; i < 50; i++) {
      if (this.canvas.width > this.loopX + 40) {
        this.alien.push(
          new Alien(this, this.loopX, this.loopY, 40, 40, "#9e768f")
        );
        this.loopX += 55;
      } else {
        this.loopY += 80;
        this.loopX = 30;
        this.alien.push(
          new Alien(this, this.loopX, this.loopY, 40, 40, "#9e768f")
        );
        this.loopX += 55;
      }
    }

    //DRAW SMALL ALIEN:
    for (let i = 0; i < 50; i++) {
      if (this.canvas.width > this.loopSmallX + 40) {
        this.alien.push(
          new Alien(this, this.loopSmallX, this.loopSmallY, 10, 10, "white")
        );
        this.loopSmallX += 55; //spacing between
      } else {
        this.loopSmallY += 80; //spacing in the y
        this.loopSmallX = 45; //spacing in the x
        this.alien.push(
          new Alien(this, this.loopSmallX, this.loopSmallY, 10, 10, "white")
        );
        this.loopSmallX += 55;
      }
    }
  }

  // UPDATE THE GAME:
  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground();
    this.player.draw();
    this.frames++;
    this.createEnemies();
    //DRAW ALIENS:
    for (let i = 0; i < this.alien.length; i++) {
      this.alien[i].draw();
    }
    //DRAW BULLETS:
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    });
    //DRAW ENEMIES - BONUS :
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw();
    }
    //DRAW PARTICLES - BONUS:
    /* for(let i = 0; i < 8; i++) {
      projectiles.push(new Particle(this.projectiles.x, this.projectiles.y, 3, `hls(${Math.random() * 360}, 50%, 50%)`))
    } */

    this.drawTimer();
    this.checkColision();
    this.checkColision2();
    if (this.hits3X === 3) {
      this.stop();
    }
    this.checkGameOver();
  }

  //CREAT ENEMIES:
  //BONUS:
  createEnemies = () => {
    if (this.frames % 300 === 0) {
      this.enemies.push(
        new Enemy(
          this,
          Math.floor(Math.random() * this.width - 50),
          -50,
          50,
          50
        )
      );
    }
  };

  // ALIEN bieng hit by BULLET:
  //THIS IS MY COLISION:
  checkColision() {
    this.bullets.forEach((bullet, indexBull) => {
      this.alien.forEach((el, indexAl) => {
        if (bullet.crashWith(el)) {
          this.alien.splice(indexAl, 1);
          this.bullets.splice(indexBull, 1);

          if (el.width === 10) {
            this.score += 100;
          } else {
            this.score += 50;
          }
        }
      });
    });
  }

  // PLAYER being hit by ENEMIES:
  //COLISION - BONUS:
  checkColision2() {
    const player = this.player;
    let index = null;
    const crashed = this.enemies.some((enemy, i) => {
      index = i;
      return player.crashWithEnemies(enemy);
    });
    if (crashed) {
      this.enemies.splice(index, 1);
      this.score -= 100;
      this.hits3X++;
    }
  }

  //GAME OVER:
  checkGameOver() {
    if (this.frames > 60 * 60) {
      //draw game over screen:
      this.ctx.fillStyle = "#6c464f";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.ctx.font = "30px sol";
      this.ctx.fillStyle = "#b3cdd1";
      this.ctx.fillText(`Game Over`, 250, 250);
      //stop the game:
      this.stop();
      // if enemies collide 3X
    }
  }

  //CHECK WIN:
  checkWin() {
    if (this.score >= 6000) {
      //draw win screen:
      this.ctx.fillStyle = "#6c464f";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.ctx.font = "30px sol";
      this.ctx.fillStyle = "#9fa4c4";
      this.ctx.fillText(`You Win!`, 250, 250);
      this.stop();
    }
  }

  //Stop the game:
  stop() {
    clearInterval(this.intervalId);
  }

  //BACKGROUND SCREEN:
  drawBackground() {
    /*  this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height); */
    //DRAW MY IMAGE BACKGROUND:
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  //DRAW TIMER:
  drawTimer() {
    let timer = Math.floor(this.frames / 60);
    this.ctx.font = "24px sol";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Timer: ${timer}`, 25, 40);
    //DRAW SCORE:
    this.ctx.fillText(`Score: ${this.score}`, 430, 35);
  }
}
