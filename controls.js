/* class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyboardEvents() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "ArrowRight":
                    if (this.player.x + this.player.width < 2 ) {
                        this.player.moveRight();
                    }
                    break;
                    case "ArrowLeft":
                        if (this.player.x > 1){
                            this.player.moveLef()
                        }
            }
        })
    }
} */