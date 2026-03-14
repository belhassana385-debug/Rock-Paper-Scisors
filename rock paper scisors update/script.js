let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    loses: 0,
    ties: 0,
    result: '',
    userMove: '',
    compMove: ''
};

let userScore = score.win;
let computerScore = score.loses;
let ties = score.ties;

updateScore();

function Player(PlayerMove){
    const ComputerMove = PickComputer();

    let result = '';

    if (PlayerMove === 'Scissors') {
        if (ComputerMove === 'Rock') {
            result = "Lose!";
            computerScore++;
        } else if (ComputerMove === "Paper"){
            result = "Win!";
            userScore++;
        } else if (ComputerMove === "Scissors"){
            result = "Tie!";
            ties++;
        }

    } else if (PlayerMove === "Paper") {
        if (ComputerMove === 'Rock') {
            result = "Win!";
            userScore++;
        } else if (ComputerMove === "Paper"){
            result = "Tie!";
            ties++;
        } else if (ComputerMove === "Scissors"){
            result = "Lose!";
            computerScore++;
        }

    } else if (PlayerMove === "Rock") {
        if (ComputerMove === 'Rock') {
            result = "Tie!";
            ties++;
        } else if (ComputerMove === "Paper"){
            result = "Lose!";
            computerScore++;
        } else if (ComputerMove === "Scissors"){
            result = "Win!";
            userScore++;
        }
    }
    
    score.win = userScore;
    score.loses = computerScore;
    score.ties = ties;
    score.result = result;
    score.userMove = PlayerMove;
    score.compMove = ComputerMove;
    
    updateScore();
    localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById("ties-score").textContent = ties;
    document.getElementById("userMove").textContent = score.userMove;
    document.getElementById("compMove").textContent = score.compMove;
    
    document.getElementById('result-lose').style.display = 'none';
    document.getElementById('result-win').style.display = 'none';
    document.getElementById('result-tie').style.display = 'none';
    
    if (score.result === 'Win!') {
        document.getElementById('result-win').style.display = 'block';
    } else if (score.result === 'Lose!') {
        document.getElementById('result-lose').style.display = 'block';
    } else if (score.result === 'Tie!') {
        document.getElementById('result-tie').style.display = 'block';
    }
}

function PickComputer(){
    const randomnum = Math.random();

    let ComputerMove = '';

    if (randomnum >= 0 && randomnum < 1/3){
        ComputerMove = "Rock";
    } else if (randomnum >= 1/3 && randomnum < 2/3) {
        ComputerMove = "Paper";
    } else if (randomnum <1){
        ComputerMove = "Scissors";
    }

    return ComputerMove;
}

function ResetScore(){
    userScore = 0;
    computerScore = 0;
    ties = 0;
    score.result = '';
    score.userMove = '';
    score.compMove = '';
    localStorage.removeItem('score');
    updateScore();
}
