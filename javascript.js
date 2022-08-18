//function of single round
function singleround(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
     return 'You Lose! Paper beats Rock'}
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
         return 'You Win! Paper beats Rock'}
     else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
         return 'You Lose! Scissors beats paper'}
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection == 'paper') {
         return 'You Win! Scissors beats paper'}
     else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
         return 'You Lose! Rock beats scissors'}
     else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
         return 'You Win! Rock beats scissors'}
     else if (playerSelection.toLowerCase() == computerSelection) {
         return 'Draw!'}
     }
//get random variable or ComputerChoice
function getComputerChoice() { 
 randominteger = Math.floor(Math.random() * 9);
     if (randominteger <= 2) {
         return 'rock'}
     else if (randominteger > 2 && randominteger <= 5) {
         return 'paper'}
     else {
         return 'scissors'}
         }
let amountComputersWin = 0; // for count and display computers win
let amountusersWin = 0; // for count and display users win
let result; // get winner
let ComputerChoice; // for checking computers Choice in console
//loop of game
for (let i = 0; i < 5; i++) {
let answer = prompt('please make your choise' , '');
ComputerChoice = getComputerChoice()
result = singleround(answer, ComputerChoice);
if (result == 'You Lose! Paper beats Rock' || result == 'You Lose! Scissors beats paper' || result == 'You Lose! Rock beats scissors') {
    amountComputersWin++}
else if (result == 'You Win! Paper beats Rock' || result == 'You Win! Scissors beats paper' || result == 'You Win! Rock beats scissors') {
    amountusersWin++}
else if (result == 'Draw!') {
    i--};
console.log(`TOTAL SCORE computer ${amountComputersWin} : you ${amountusersWin}. For total win you must go out 5 rounds. Good luck! ${ComputerChoice}`)
                         }
