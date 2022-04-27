class Player {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }
  //DRAW THE PLAYER:
  draw() {
    // cicle with colors:
    /* this.game.ctx.fillStyle = `hls(${Math.random() * 360}, 50%, 50%)`;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height); */
    this.img.src = "./docs/assets/img/player_03.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  //MOVE THE PLAYER:
  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }

  //PLAYER LIMITS (use this for establish the colisions):
  topPlayer() {
    return this.y;
  }

  bottomPlayer() {
    return this.y + this.height;
  }

  rightPlayer() {
    return this.x + this.width;
  }

  leftPlayer() {
    return this.x;
  }

  //CONDITIONS FOR THE COLLISION (enemies/player):
  crashWithEnemies(enemies) {
    return !(
      this.bottomPlayer() < enemies.topEnemy() ||
      this.topPlayer() > enemies.bottomEnemy() ||
      this.rightPlayer() < enemies.leftEnemy() ||
      this.leftPlayer() > enemies.rightEnemy()
    );
  }
}
