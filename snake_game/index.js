const startBtn = document.querySelector('.btn')
let grid = document.querySelector('.grid')
const scoreEl = document.querySelector('.score')
let score = 0
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 15
let appleIndex = 0
let time = 1000
let timerId = 0

function createGrid()
{
    for(let i = 0; i < 225; i++)
    {
        let square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square) 
    }
}
createGrid()
currentSnake.forEach(number => squares[number].classList.add('snake'))

function startGame() {
    grid.classList.remove('fail')
    currentSnake.forEach(number => squares[number].classList.remove('snake'))
    document.querySelector('.apple').innerText = ''
    squares[currentSnake[0]].classList.remove('apple')

    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0
    scoreEl.innerText = score
    direction = 1
    time = 1000
    generateApples()

    currentSnake.forEach(number => squares[number].classList.add('snake'))
    timerId = setInterval(move, time)
    
}

function move()
{
    if(
        (currentSnake[0] + width >= width*width && direction == width) || //if snake hits the bottom
        (currentSnake[0] - width < 0 && direction == -width) || //if snakes hits the top
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits the left wall
        (currentSnake[0] % width === width-1 && direction === 1) //if snake hits the right wall

    )
    {
        grid.classList.add('fail')
        return clearInterval(timerId);
    }
    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    console.log(currentSnake)
    if(squares[currentSnake[0]].classList.contains('apple')){
        document.querySelector('.apple').innerText = ''
        squares[currentSnake[0]].classList.remove('apple')

        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        
        console.log(currentSnake)
        score += 1
        scoreEl.innerText = score
        generateApples()

        clearInterval(timerId)
        time = time*0.9
        timerId = setInterval(move, time)
    }
    currentSnake.forEach(number => squares[number].classList.add('snake'))

    for(let i = 1; i <= currentSnake.length; i++)
    {
        if(currentSnake[0] === currentSnake[i]){
            grid.classList.add('fail')
            clearInterval(timerId)
        }
    }
    
}
move()




function control(e){
    if(e.keyCode === 39){
        direction = 1
    }else if(e.keyCode === 38){
        direction = -width
    }else if(e.keyCode === 37){
        direction = -1
    }else if(e.keyCode === 40){
        direction = +width
    }else{
        console.log('invalid key')
    }
}


function generateApples()
{
    do{
        appleIndex = Math.floor(Math.random()*squares.length);
    }while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
    document.querySelector('.apple').innerText = '🍎'
}
generateApples()

document.addEventListener('keyup', control)

startBtn.addEventListener('click', startGame)
