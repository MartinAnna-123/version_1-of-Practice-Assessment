// let player1 = prompt('enter player ones name?')
// // let player2 = prompt('enter is player twos name?')
// console.log('welcome to the game ' + player1)
play();

function play(){
let pointPlayer1 = 0
let pointPlayer2 = 0

diceQuestion1();
function diceQuestion1(){
var play = prompt('player1 would you like to roll the dice?')
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
  pointPlayer1 ++
}

diceQuestion2();
function diceQuestion2(){
var play = prompt('player2 would you like to roll the dice?')
  if (play == 'yes'){
  roll2();
  }
  else if (play == 'no'){
    console.log('shame')
  }
  else{
    console.log('invalid please re-enter an answer')
    diceQuestion2();
  }}
function roll2(){
  let dice2 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice2)
  pointPlayer2 ++
}

var play2 = prompt ('do you want to play again?')
  if (play2 == 'yes'){
  play();
  } else {
ending();
  }

function ending(){
if( pointPlayer1 > pointPlayer2 ){
  console.log('player1 wins')
}else if(pointPlayer1 = pointPlayer2){
  console.log('draw')
}else{
  console.log('player2 wins')
}}
}


