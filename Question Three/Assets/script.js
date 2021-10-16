/*
    Shaiyur Dooken - 151757
    Web Technlogy 512
    Question Three - JS File
*/

function processInformation() {
    var name = getValidInput("Enter your first name:", "Please enter a correct name!");
    var lastName = getValidInput("Enter your last name:", "Please enter a correct surname!");

    var output = lastName + ", " + name;

    alert("Here's the information in a single string: " + output);
}

function getValidInput(displayPrompt, errorMessage) {
    var answer;

    while (true) {
        answer = prompt(displayPrompt);

        if (answer == "" || isNaN(answer) == false) {alert(errorMessage);}
        else {return answer;}
    }
}