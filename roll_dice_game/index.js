
const player1Score = document.querySelector('.player1-score');
const player2Score = document.querySelector('.player2-score');
const diceOutput1 = document.querySelector('.dice.output1');
const diceOutput2 = document.querySelector('.dice.output2');
const rollDice = document.querySelector('.play-button');
let check = true;
let gameOver = false;
let player1_score = 0;
let player2_score = 0;

rollDice.addEventListener('click', function()
{
  const dice_value = Math.floor(Math.random()*6)+1;
  if(gameOver)
  {
    player1_score = 0;
    player2_score = 0;
    document.querySelector('.h1').innerText = 'Player Turn';
    diceOutput1.classList.remove('glow');
    diceOutput2.classList.remove('glow');
    diceOutput1.innerText = '0';
    diceOutput2.innerText = '0';
    player1Score.innerText = '0';
    player2Score.innerText = '0';
    rollDice.innerText = 'Roll Dice 🎲';
    gameOver = false;
  }
  else
  {
    if(check == true)
    {
      document.querySelector('.h1').innerText = 'Player 1 Turn';
      diceOutput2.classList.remove('glow');
      diceOutput1.classList.add('glow');
      diceOutput1.innerText = dice_value;
      player1_score += dice_value;
      player1Score.innerText = player1_score;
      if(player1_score >= 20)
      {
        gameOver = true;
        document.querySelector('.h1').innerText = 'Player 1 wins 🏆';
        rollDice.innerText = 'Reset 🔁';
      }
      check = false;

    }
    else 
    {
      document.querySelector('.h1').innerText = 'Player 2 Turn';
      diceOutput1.classList.remove('glow');
      diceOutput2.classList.add('glow');
      diceOutput2.innerText = dice_value;
      player2_score += dice_value;
      player2Score.innerText = player2_score;
      if(player2_score >= 20)
      {
        gameOver = true;
        document.querySelector('.h1').innerText = 'Player 2 wins 🏆';
        rollDice.innerText = 'Reset 🔁';
      }
      check = true;

    }
  }
  
})

