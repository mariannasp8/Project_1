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
    this.loopX = 0;
    this.loopY = 20;
    this.loopSmallX = 0;
    this.loopSmallY = 75;
    this.intervalId = null;
    this.bullets = [];
    this.frames = 0;
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
    for (let i = 0; i < 59; i++) {
      if (this.canvas.width > this.loopX + 40 + 10) {
        this.alien.push(
          new Alien(this, 30 + this.loopX, this.loopY, 40, 40, "#9e768f")
        );
        this.alien[i].draw();
        // console.log(this.alien[i]);
        this.loopX += 50;
      } else {
        this.loopY += 80;
        this.loopX = 0;
        this.alien.push(
          new Alien(this, 30 + this.loopX, this.loopY, 40, 40, "#9e768f")
        );
        // console.log(this.alien[i]);
      }
    }
    //DRAW SMALL ALIEN:
    for (let i = 0; i < 54; i++) {
      if (this.canvas.width > this.loopSmallX + 40 + 10) {
        this.alien.push(
          new Alien(this, this.loopSmallX, this.loopSmallY, 10, 10, "white")
        );

        // console.log(this.alien[i]);
        this.loopSmallX += 58; //spacing between
      } else {
        this.loopSmallY += 80;
        this.loopSmallX = 0;
        this.alien.push(
          new Alien(this, this.loopSmallX, this.loopSmallY, 10, 10, "white")
        );
        // console.log(this.alien[i]);
      }
    }
  }

  update() {
    this.drawBackground();
    this.player.draw();
    this.frames++;

    for (let i = 0; i < this.alien.length; i++) {
      this.alien[i].draw();
    }
    //DRAW BULLETS:
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    });
    this.checkColision();
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

  //Colision of bullets with Alien:
  //Do a loop in Alien + loop in the bullets (arrays):
  checkColision() {
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
      /*     this.alien.forEach((el, j) => {
        if (bullet.crashWith(el)) {
          this.alien.splice(j, 1);
          this.bullets.splice(j, 1);
          this.score++;
          //score.innerHTML = this.score;
        }
      }); */
    });
  }

  //GAME OVER:

  /*  checkGameOver() {
    const bullets = this.bullets;
    const kill = this.alien.some(function (el) {
      return bullets.crashWith(el);
    });
  }  */

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

  //DRAW SCORES:

  drawScores() {
    let score = Math.floor(this.frames / 60);
  }
}
