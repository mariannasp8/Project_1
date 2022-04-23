window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game();
    game.start();
    const inervalId = setInterval(() => {
      game.update();
    }, 30);
  }
};
