class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.backgroundImg = new Image();
    //this.backgroundImg.src = "http://www.enquiringminds.com.au/wp-content/uploads/2012/09/em_exprt-pic_spce_gaensler_140x140.png";
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 600;
    this.player = null;
    this.alien = [];

    this.loopX = 0;
    this.loopX2 = 0;
  }

  start() {
    this.drawBackground();
    this.player = new Player(this, 200, 550, 40, 40);
    this.player.draw();
    /*  this.alien = new Alien(this, 100, 200, 40, 40);
    this.alien1 = new Alien(this, 200, 200, 40, 40); */
    for (let i = 0; i < 20; i++) {
      if (this.width > 10 + this.loopX) {
        this.alien.push(new Alien(this, 10 + this.loopX, 20, 40, 40));
        this.alien[i].draw();
        this.loopX += 50;
      } else {
        this.alien.push(new Alien(this, 10 + this.loopX2, 100, 40, 40));
        this.alien[i].draw();
        this.loopX2 += 50;
      }
    }
  }

  update() {
    this.drawBackground();
    this.player.draw();
    for (let i = 0; i < this.alien.length; i++) {
      this.alien[i].draw();
    }
    console.log("hi");
  }

  drawBackground() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    /* this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    ); */
  }
}
