class Player {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }
  draw() {
    this.img.fillStyle = "#9E768F";
    this.game.ctx.fillRect(this.x, this.y, 50, 50);
  }

  /* moveLeft() {
    this.x;
  }

  moveRight() {
    this.x;
  } */
}
