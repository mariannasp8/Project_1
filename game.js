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
    this.smallAlien = [];
    this.loopX = 0;
    this.loopY = 20;
    this.loopSmallX = 0;
    this.loopSmallY = 75;
    this.intervalId = null;
  }

  start() {
    this.drawBackground();
    this.player = new Player(this, 200, 550, 40, 40);
    this.player.draw();
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 100 / 60);

    // BIG ALIEN:
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
          new Alien(
            this,
            30 + this.loopSmallX,
            this.loopSmallY,
            10,
            10,
            "white"
          )
        );
        this.alien[i].draw();
        // console.log(this.alien[i]);
        this.loopSmallX += 58; //spacing between
      } else {
        this.loopSmallY += 80;
        this.loopSmallX = 0;
        this.alien.push(
          new Alien(
            this,
            30 + this.loopSmallX,
            this.loopSmallY,
            10,
            10,
            "white"
          )
        );
        // console.log(this.alien[i]);
      }
    }
  }

  update() {
    this.drawBackground();
    this.player.draw();
    for (let i = 0; i < this.alien.length; i++) {
      this.alien[i].draw();
    }
    //console.log("hi");
  }

  drawBackground() {
    /*  this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height); */

    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
