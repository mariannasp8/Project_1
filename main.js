let game = null;

const startButton = document.getElementById("start-btn");

function startGame() {
  if (!game || !game.isGameActive) {
    game = new Game();
    game.start();
  }
}

window.onload = () => {
  startButton.onclick = () => {
    startGame();
    startButton.style.display = "none";
  };
};
