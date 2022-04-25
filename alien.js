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
  //Draw Aliens:
  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }


//ALIEN LIMITS (use this for establish the colisions):
    topAlien() {
    return this.y;
    }

    bottomAlien() {
    return this.y + this.height;
    }

    rightAlien() {
    return this.x + this.width;
    }

    leftAlien() {
    return this.x;
    }



  /* moveLeft() {
      this.x;
    }
  
    moveRight() {
      this.x;
    } */
}
