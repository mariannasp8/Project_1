class Alien {
  constructor(game, x, y, width, height, image) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.image = image;
  }

  draw() {
    //DRAW ALIENS:
    /* this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height); */
    this.img.src = this.image;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
}

//CREATE MY NEW ENEMIES:
//BONUS:
class Enemy extends Alien {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height);
    //speed:
    this.vY = Math.floor(Math.random() * 8 + 2);
  }
  //DRAW ENEMIES:
  draw() {
    this.y += this.vY;
    this.img.src = "./docs/assets/img/enemy.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  //ENEMY LIMITS (use this for establish the colisions):
  topEnemy() {
    return this.y;
  }

  bottomEnemy() {
    return this.y + this.height;
  }

  rightEnemy() {
    return this.x + this.width;
  }

  leftEnemy() {
    return this.x;
  }
}
