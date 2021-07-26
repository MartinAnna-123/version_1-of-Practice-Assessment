let player1 = prompt('enter player ones name?')
// let player2 = prompt('enter is player twos name?')
console.log('welcome to the game ' + player1)

// roll = ('1' + '2' + '3' + '4' + '5'+'6')
diceQuestion();
function diceQuestion(){
var play = prompt('would you like to roll the dice')
  if (play == 'yes'){
  roll();
  }
  else if (play == 'no'){
    console.log('shame')
  }
  else{
    console.log('invalid please re-enter an answer')
    
    diceQuestion();
  }}
function roll(){
  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}