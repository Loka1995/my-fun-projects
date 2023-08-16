const playerLabel = document.getElementById("player-label");
const computerLabel = document.getElementById("computer-label");
const resultLabel = document.getElementById("result-label");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const arrayRPS = ['Rock', 'Paper', 'Scissors'];
let choiceOfAI;

rockButton.addEventListener("click", () => {
    playerLabel.textContent = choosePlayer(0);
    computerLabel.textContent = chooseAI();
    resultLabel.textContent = winner(0);
});
paperButton.addEventListener("click", () => {
    playerLabel.textContent = choosePlayer(1);
    computerLabel.textContent = chooseAI();
    resultLabel.textContent = winner(1);
});
scissorsButton.addEventListener("click", () => {
    playerLabel.textContent = choosePlayer(2);
    computerLabel.textContent = chooseAI();
    resultLabel.textContent = winner(2);
});

function choosePlayer(index) {
    return "Player : " +  arrayRPS[index];
}

function chooseAI() {
    let choiceIndex = Math.floor(Math.random(3) * 3);
    choiceOfAI = "Computer : " + arrayRPS[choiceIndex]
    return choiceOfAI;
}

function winner(playerIndex) {
    let playerChoice = choosePlayer(playerIndex).toString().split(" : ")[1];
    let aIChoice = choiceOfAI.toString().split(" : ")[1];
    if(playerChoice == aIChoice) {
        return 'Game tied play again';
    } 
    else if(playerChoice == 'Rock' && aIChoice == 'Paper') {
        return 'Computer wins';
    }
    else if(playerChoice == 'Paper' && aIChoice == 'Scissors') {
        return 'Computer wins';
    }
    else if(playerChoice == 'Scissors' && aIChoice == 'Rock') {
        return 'Computer wins';
    }
    else {
        return 'YOU WIN!!!';
    }
}