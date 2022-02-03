console.log('Welcome to the game Bot, Laser, Shield')
console.log('Rules: Shield beats Bot, Laser beats Shield, Bot beats Laser. Here we go:')
console.log('')
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'bot' || userInput === 'shield' || userInput ==='laser' || userInput === 'bomb') {
  return userInput;
}else {
  console.log('You must choose bot, shield, or laser');
}
}
const getComputerChoice= () => { 
  const randomNumber = Math.floor(Math.random() * 3)
switch (randomNumber) {
  case 0:
    return 'bot';
  case 1:
    return 'shield';
  case 2:
    return 'laser';
}
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  }
  if (userChoice === 'bot') {
    if (computerChoice === 'shield') {
       return 'Rogelio wins!';
  } else {
    return 'Kyle wins!';
  }
  }
  if (userChoice === 'shield') {
  if (computerChoice === 'laser') {
    return 'Rogelio wins!';
  } else {
    return 'Kyle wins!';
  }
  }
  if (userChoice === 'laser') {
  if (computerChoice === 'bot') {
    return 'Rogelio wins!';
  } else {
    return 'Kyle wins!';
  }
}
if (userChoice ==='bomb') {
  return 'Kyle wins!'
}
};
const playGame = () => {
  const userChoice = getUserChoice('bot');
  const computerChoice = getComputerChoice();
  console.log('Kyle threw: ' + userChoice);
  console.log('Rogelio threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};
playGame();