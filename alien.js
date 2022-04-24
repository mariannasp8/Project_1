class Alien {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }
  draw() {
    this.game.ctx.fillStyle = "#9e768f";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /* moveLeft() {
      this.x;
    }
  
    moveRight() {
      this.x;
    } */
}
