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
    this.loopSmallY = 132;
    this.intervalId = null;
    this.bullets = [];
    this.frames = 0;
    this.intervalId = null;
    this.score = 0;
  }

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

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground();
    this.player.draw();
    this.frames++;
    //DRAW ALIENS:
    for (let i = 0; i < this.alien.length; i++) {
      this.alien[i].draw();
    }
    //DRAW BULLETS:
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    });
    this.checkColision();
    this.drawTimer();
    this.checkGameOver();
  }

  /* checkImpact() {
    for (let e = 0; e < this.alien.length; e++) {
      for (let s = 0; s < this.bullets.length; s++) {
        if (this.bullets[s].crashWith(this.alien[e])) {
          this.bullets.splice(s, 1);
          this.alien.splice(e, 1);
        }
      }
    }
  } */

  //Colision of bullets with Alien(doing in the class):
  //Do a loop in Alien + loop in the bullets (arrays):
  /*   checkColision() {
    this.bullets.forEach((bullet) => {
      let alienToKill = [];
      const kill = this.alien.some((el) => {
        alienToKill = this.alien.indexOf(el);
        return bullet.crashWith(el);
      });
      if (kill) {
        console.log(alienToKill, bullet, this.alien);
        this.alien.splice(alienToKill, 1);
        this.bullets.splice(bullet, 1);
        this.score++;
      }
      this.alien.forEach((el, j) => {
        if (bullet.crashWith(el)) {
          this.alien.splice(j, 1);
          this.bullets.splice(j, 1);
          this.score++;
          //score.innerHTML = this.score;
        }
      });
    });
  }
 */
  /* // my colision
//THIS IS MY COLISION:
*/
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

  //GAME OVER:

  checkGameOver() {
    if (this.frames > 60 * 60) {
      // meter tela de gameover!
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  //CHECK WIN:
  checkWin() {
    if (this.score === 2000) {
      // meter tela de win!
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  //Stop the game:
  stop() {
    clearInterval(this.intervalId);
  }

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
    this.ctx.fillText(`Timer: ${timer}`, 25, 35);
    //DRAW SCORE:
    this.ctx.fillText(`Score: ${this.score}`, 480, 35);
  }
}
