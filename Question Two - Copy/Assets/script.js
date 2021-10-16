/*
    Shaiyur Dooken - 151757
    Web Technology 512
    Question Two - JS File
*/

txtOutput = document.getElementById("txtOutput");

class golf {
    constructor() {
        this.golfScores;
        this.position;
        this.maximum = 10;

        this.reset();
    }

    enterScores() {
        var answer = "";

        while(this.position < this.maximum) {
            answer = prompt("Enter a score for position " + (this.position + 1) + ". Type 'cancel' to terminate input.");

            if (answer.toLowerCase() == "cancel") {break;}
            else if (isNaN(answer) || answer == "") {alert("Please enter a valid score!");}
            else {
                this.golfScores[this.position] = parseFloat(answer);

                this.position += 1;
            }
        }
    }

    displayScores() {
        var strOut = "";

        if (this.position > 0) {
            this.golfScores.forEach(function(score) {
                strOut += score + "\t--\t";
            })

            strOut = strOut.slice(0, strOut.length - 4);
        }
        else {strOut = "Please enter some scores before attempting to display them!";}

        txtOutput.value = strOut;
    }

    calculateAverage() {
        var strOut = "";

        if (this.position > 0) {
            var sum = 0.0;

            this.golfScores.forEach(function(score) {
                sum += score
            })

            strOut = "The average of the golf scores entered is '" + (sum / this.position) + "' point(s).";
        }
        else {strOut = "Please enter some scores before attempting to generate an average!";}

        txtOutput.value = strOut;
    }

    reset() {
        this.golfScores = [];
        this.position = 0;

        txtOutput.value = "";

        this.enterScores();
    }
}

g = new golf();