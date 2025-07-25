let playerScore = 0;
let compScore = 0;

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.computer-score');

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * arrOfChoices.length);
  const compChoice = arrOfChoices[randomNum];
  return compChoice
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    const p = document.createElement('p');
    p.innerText = 'You tied! You both chose rock'
    outcomeDiv.appendChild(p);
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    const p = document.createElement('p');
    p.innerText = 'You tied! You both chose paper'
    outcomeDiv.appendChild(p);
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    const p = document.createElement('p');
    p.innerText = 'You tied! You both chose scissors'
    outcomeDiv.appendChild(p);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    const p = document.createElement('p');
    p.innerText = 'You Win! Rock breaks scissors'
    outcomeDiv.appendChild(p);
  }  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    const p = document.createElement('p');
    p.innerText = 'You Win! Paper covers rock'
    outcomeDiv.appendChild(p);
  }  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    const p = document.createElement('p');
    p.innerText = 'You Win! Scissors cuts paper'
    outcomeDiv.appendChild(p);
  }  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    const p = document.createElement('p');
    p.innerText = 'You Lose! Paper covers rock'
    outcomeDiv.appendChild(p);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    const p = document.createElement('p');
    p.innerText = 'You Lose! Scissors cuts paper'
    outcomeDiv.appendChild(p);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    const p = document.createElement('p');
    p.innerText = 'You Lose! Rock breaks scissors'
    outcomeDiv.appendChild(p);
  }
}

const checkWinner = (playerScore, compScore) => {
  if(playerScore === 5) {
    const h2 = document.createElement('h2');
    h2.classList.add('player-won');
    h2.innerText = `You won ${playerScore} to ${compScore} great job!`;
    outcomeDiv.append(h2);
  } else if (compScore === 5) {
    const h2 = document.createElement('h2');
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${compScore} to ${playerScore} bad job!`;
    outcomeDiv.append(h2);
  }
}

const updateScores = (playerScore, compScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  compScoreSpan.innerText = `Computer Score: ${compScore}`;
}

rockbtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkWinner(playerScore, compScore);
});

paperbtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

scissorsbtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});


// const game = () => {
  // for(let i = 0; i < 5; i++) {
  //  const playerSelection = prompt('Choose wisely', 'rock, paper, scissors').toLowerCase();
  //   const computerSelection = computerPlay();
  //  playRound(playerSelection, computerSelection); 
  // }
//   if(playerScore > compScore) {
//     return 'You beat computer'
//   } else if(playerScore < compScore) {
//     return 'You dumb computer wins'
//   } else {
//     return 'You tied computer'
//   }
// }


// console.log(game());
