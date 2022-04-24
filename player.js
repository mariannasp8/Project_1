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
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.shoot();
  }

   moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  } 

/*
  shoot() {
      
  }
  */
}
