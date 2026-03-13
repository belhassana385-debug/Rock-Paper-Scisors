let userScore = 0;
let computerScore = 0;

function Player(PlayerMove){
    const ComputerMove = PickComputer();

    let result = '';

        if (PlayerMove === 'Scisors') {
            if (ComputerMove === 'Rock') {
                result = "Lose!";
                computerScore++;
            } else if (ComputerMove === "Paper"){
                result = "Win!";
                userScore++;
            } else if (ComputerMove === "Scisors"){
                result = "Tie!";
            }

        } else if (PlayerMove === "Paper") {
            if (ComputerMove === 'Rock') {
                result = "Win!";
                userScore++;
            } else if (ComputerMove === "Paper"){
                result = "Tie!";
            } else if (ComputerMove === "Scisors"){
                result = "Lose!";
                computerScore++;
            }

        } else if (PlayerMove === "Rock") {
            if (ComputerMove === 'Rock') {
                result = "Tie!";
            } else if (ComputerMove === "Paper"){
                result = "Lose!";
                computerScore++;
            } else if (ComputerMove === "Scisors"){
                result = "Win!";
                userScore++;
            }
        }

    updateScore();
    alert(`You picked ${PlayerMove}. Computer picked ${ComputerMove}. ${result}`);
}

function updateScore() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function PickComputer(){
    const randomnum = Math.random();

    let ComputerMove = '';

    if (randomnum >= 0 && randomnum < 1/3){
        ComputerMove = "Rock";
    } else if (randomnum >= 1/3 && randomnum < 2/3) {
        ComputerMove = "Paper";
    } else if (randomnum <1){
        ComputerMove = "Scisors";
    }

    return ComputerMove;
}