const body = document.querySelector('body')
const div = document.querySelector('div')
const buttonPaper = document.createElement('button')
const buttonRock = document.createElement('button')
const buttonScissors = document.createElement('button')
buttonPaper.textContent = 'Paper'
buttonRock.textContent = 'Rock'
buttonScissors.textContent = 'Scissors'
body.insertAdjacentElement ('afterbegin', buttonRock)
body.insertAdjacentElement ('afterbegin', buttonPaper)
body.insertAdjacentElement ('afterbegin', buttonScissors)
let sumOfUserWins = 0
let sumOfCompWins = 0
let sumOfDraws = 0
//get ComputerChoice
function getComputerChoice() { 
 randominteger = Math.floor(Math.random() * 9);
     if (randominteger <= 2) {
         return 'rock'}
     else if (randominteger > 2 && randominteger <= 5) {
         return 'paper'}
     else {
         return 'scissors'}
         }
//when click on button Rock
buttonRock.addEventListener('click', function () {
    let computerChoice = getComputerChoice()
    if (computerChoice === 'rock')
    sumOfDraws++
    else if (computerChoice === 'scissors')
    sumOfUserWins++
    else if (computerChoice === 'paper')
    sumOfCompWins++
    console.log(computerChoice)
    console.log(sumOfUserWins, sumOfCompWins, sumOfDraws)
    div.textContent = `Total score | You ${sumOfUserWins} : ${sumOfCompWins} Computer | amount of draw ${sumOfDraws}`
    getWinner(sumOfUserWins, sumOfCompWins)
})
//when click on button Paper
buttonPaper.addEventListener('click', function () {
    let computerChoice = getComputerChoice()
    if (computerChoice === 'paper') 
    sumOfDraws++
    else if (computerChoice === 'rock')
    sumOfUserWins++
    else if (computerChoice === 'scissors')
    sumOfCompWins++
    console.log(computerChoice)
    console.log(sumOfUserWins, sumOfCompWins, sumOfDraws)
    div.textContent = `Total score | You ${sumOfUserWins} : ${sumOfCompWins} Computer | amount of draw ${sumOfDraws}`
    getWinner(sumOfUserWins, sumOfCompWins)
})
//when click on button Scissors
buttonScissors.addEventListener('click', function () {
    let computerChoice = getComputerChoice()
    if (computerChoice === 'scissors') 
    sumOfDraws++
    else if (computerChoice === 'paper')
    sumOfUserWins++
    else if (computerChoice === 'rock')
    sumOfCompWins++
    console.log(computerChoice)
    div.textContent = `Total score | You ${sumOfUserWins} : ${sumOfCompWins} Computer | amount of draw ${sumOfDraws}`
    getWinner(sumOfUserWins, sumOfCompWins)
})
//results
console.log(sumOfUserWins, sumOfCompWins, sumOfDraws)

function getWinner(sumOfUserWins, sumOfCompWins) {
    if (sumOfUserWins === 5) {
div.textContent = `YOU WIN!!! | You ${sumOfUserWins} : ${sumOfCompWins} Computer | amount of draw ${sumOfDraws}`
  }
    else if (sumOfCompWins === 5) {
div.textContent = `YOU LOSE!!! | Total score | You ${sumOfUserWins} : ${sumOfCompWins} Computer | amount of draw ${sumOfDraws}`
      }
    if (sumOfUserWins === 5 || sumOfCompWins === 5){
        buttonPaper.style.display = 'none'
        buttonRock.style.display = 'none'
        buttonScissors.style.display = 'none'
    }
}


/*




*/