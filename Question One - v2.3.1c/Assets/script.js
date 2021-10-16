/* Shaiyur Dooken - 151757
    Web Technology 512
    Question One - JS File
*/
bgMusic = document.getElementById("bgMusic");
gameOverSFX = document.getElementById("gameOver");
moveSFX = document.getElementById("move");
winSFX = document.getElementById("win");

bgMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

const moves = {
    X: "X",
    O: "O",
    EMPTY: ""
}

class tictactoe {
    constructor(){
        this.currentMove;
        this.totalMoves;
        this.board;
        this.win;
        this.playSFX = true;

        this.reset();
    }

    updateBoard(x, y) {
        if (this.board[x][y] == moves.EMPTY && this.win == false) {
            if (this.playSFX) {moveSFX.play();}

            this.totalMoves += 1;

            this.board[x][y] = this.currentMove;

            document.getElementById("pos" + x + y).innerHTML = this.currentMove;

            document.getElementById("status").innerHTML = "<span>Status</span>: Player " + this.board[x][y] + 
            " has placed symbol in position (" + x + ", " + y + ").";

            switch (this.currentMove) {
                case moves.X:
                    this.currentMove = moves.O;
                    break;
                case moves.O:
                    this.currentMove = moves.X;
                    break;
            }

            this.checkWin();

            if (this.totalMoves == 9 && this.win != true) {
                document.getElementById("status").innerHTML = "<span>Status</span>: It's a draw, click the reset button to start a new game."

                if (this.playSFX) {gameOverSFX.play();}
            }
        }
        else if (this.win) {
            document.getElementById("status").innerHTML = "<span>Status</span>: You've already won! Click reset to start a new game";
        }
        else {
            document.getElementById("status").innerHTML = "<span>Status</span>: That position is already taken!";
        }
    }

    checkWin() {
        if (this.totalMoves >= 5) {
            // Horizonal check below
            if (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] != moves.EMPTY) {
                this.showWinner(this.board[0][0]);
            }
            else if (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2] && this.board[1][0] != moves.EMPTY) {
                this.showWinner(this.board[1][0]);
            }
            else if (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[2][2] && this.board[2][0] != moves.EMPTY) {
                this.showWinner(this.board[2][0]);
            } // vertical check below
            else if (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0] && this.board[0][0] != moves.EMPTY) {
                this.showWinner(this.board[0][0]);
            }
            else if (this.board[0][1] == this.board[1][1] && this.board[0][1] == this.board[2][1] && this.board[0][1] != moves.EMPTY) {
                this.showWinner(this.board[0][1]);
            }
            else if (this.board[0][2] == this.board[1][2] && this.board[0][2] == this.board[2][2] && this.board[0][2] != moves.EMPTY) {
                this.showWinner(this.board[0][2]);
            } //diagonal check below
            else if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2] && this.board[0][0] != moves.EMPTY) {
                this.showWinner(this.board[0][0]);
            }
            else if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0] && this.board[0][2] != moves.EMPTY) {
                this.showWinner(this.board[0][2]);
            }
        }
        else if (this.totalMoves == 9) {
            document.getElementById("status").innerHTML = "<span>Status</span>: It's a draw, click the reset button to start a new game.";

            if (this.playSFX) {gameOverSFX.play();}
        }
    }

    reset() {
        switch (getValidInput(["X", "O"], "Who goes first, 'X' or 'O'?")) {
            case "X":
                this.currentMove = moves.X;
                break;
            case "O":
                this.currentMove = moves.O;
                break;
        }

        this.totalMoves = 0;
        this.win = false;

        this.board = [[moves.EMPTY, moves.EMPTY, moves.EMPTY],
                      [moves.EMPTY, moves.EMPTY, moves.EMPTY],
                      [moves.EMPTY, moves.EMPTY, moves.EMPTY]];

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++){
                document.getElementById("pos" + i + j).innerHTML = moves.EMPTY;
            }
        }

        document.getElementById("status").innerHTML = "<span>Status</span>: Ready to play";
    }

    showWinner(winner) {
        this.win = true;

        if (this.playSFX) {winSFX.play();}

        document.getElementById("status").innerHTML = "<span>Status</span>: Congratulations Player " + winner + ". Click 'Reset' to start a new game.";
    }

    toggleMusic() {
        if (confirm("Do you want the background music to play?")) {bgMusic.play();}
        else {bgMusic.pause();}
    }

    toggleSFX() {
        if (confirm("Do you want SFX to be played?")) {this.playSFX = true;}
        else {this.playSFX = false;}
    }
}

function getValidInput(acceptableValues, displayPrompt) {
    var answer = "";

    while (true) {
        answer = prompt(displayPrompt);

        for (var i = 0; i < acceptableValues.length; i++) {
            if (acceptableValues[i] == answer.toUpperCase()) {return answer.toUpperCase();}
        }
    }
}

g = new tictactoe();