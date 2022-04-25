window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };

  let game = null;

  function startGame() {
    if (!game) {
      game = new Game();
      game.start();
    }
  }
};
