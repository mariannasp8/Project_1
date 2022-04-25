class Alien {
  constructor(game, x, y, width, height, color) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.color = color;
  }
  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /* moveLeft() {
      this.x;
    }
  
    moveRight() {
      this.x;
    } */
}
