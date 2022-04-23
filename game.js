class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    const img = new Image();
    this.backgroundImg = img;
    //this.backgroundImg.src = "http://www.enquiringminds.com.au/wp-content/uploads/2012/09/em_exprt-pic_spce_gaensler_140x140.png";
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 600;
    this.player = null;
  }

  start() {
    this.player = new Player(this, 200, 500, 200, 200);
  }

  update() {
    this.drawBackground();
    this.player.draw();
  }
  drawBackground() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.player.draw();
    /* this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    ); */
  }
}
