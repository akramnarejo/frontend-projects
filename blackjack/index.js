
let cardsEl = document.querySelector('.cards-el')
let messageEl = document.querySelector('.message-el')
let sumEl = document.querySelector('.sum-el')
let winnerEl = document.querySelector('.winner')
let hasBlackJack = false;
let isAlive = false;
let cards = []
let sum = 0
let message = ""

let player = {
  name: "",
  amount: 0
}

player.name = prompt('Enter your name: ') 
player.amount = +prompt('Enter your amount: ')
if(player.name && player.amount){
  winnerEl.textContent = player.name + ": $"+player.amount
}
function startGame(){
  isAlive = true
  hasBlackJack = false
  let card1 = getRandom()
  let card2 = getRandom()
  cards = [card1, card2]
  sum = card1 + card2
  if(player.amount > 0){
    playGame()
  }else{
    winnerEl.textContent = player.name + ": You got no money."
  }
}

function getRandom(){
    return parseInt((Math.random()*13)+1)
  }

function playGame(){
 cardsEl.textContent = "Cards: "
 for(let i = 0; i < cards.length; i++){
     cardsEl.textContent += cards[i]+ " "
 }

  sumEl.textContent = "Sum: "+sum

  if(sum <= 20){
    message = "Draw a new card. "
  }
  else if(sum === 21){
    message = "You've got a black jack."
    hasBlackJack = true
    player.amount += 50
    winnerEl.textContent = player.name + ": $"+player.amount
  }
  else{
      message = "You are out of game."
      isAlive = false
      player.amount -= 50
      winnerEl.textContent = player.name + ": $"+player.amount
  }
messageEl.textContent = message
  
}
function newCard(){
  if(isAlive === true && hasBlackJack===false && player.amount > 0 ){
    let card = getRandom()
    cards.push(card)
    sum += card
    playGame()
  }
}
