let game = null;

function startGame() {
  if (!game || !game.isGameActive) {
    game = new Game();
    game.start();
  }
}

window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };
};
