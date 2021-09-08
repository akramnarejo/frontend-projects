const width = 28
const grid = document.querySelector('.grid')
let squares = []
const scoreDisplay = document.querySelector('.score')
let score = 0
// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// create board

function createBoard(){
    for(let i = 0; i < layout.length; i++){
        // create square
        const square = document.createElement('div')
        // put square in grid
        grid.appendChild(square)
        // put square in squares array
        squares.push(square)

        // add pacdots 
        if(layout[i] === 0){
            squares[i].classList.add('pac-dot')
        }else if(layout[i] === 1){
            squares[i].classList.add('wall')
        }else if(layout[i] === 2){
            squares[i].classList.add('ghost-lair')
        }else if(layout[i] === 3){
            squares[i].classList.add('power-pallet')
        }
    }
}

createBoard()

// starting position of pacman
let pacmanIndex = 490
squares[pacmanIndex].classList.add('pacman')

function control(e){
    console.log(layout[pacmanIndex])
    squares[pacmanIndex].classList.remove('pacman')
    switch(e.keyCode){
        case 37:
            if( 
                !squares[pacmanIndex-1].classList.contains('wall') && 
                pacmanIndex % width !== 0
                ) pacmanIndex -= 1
                if(pacmanIndex === 364){
                    pacmanIndex = 391
                }
            break
        case 38:
            if( 
                !squares[pacmanIndex-width].classList.contains('wall') && 
                pacmanIndex - width >= 0
                ) pacmanIndex -= width
            break
        case 39:
            if( 
                !squares[pacmanIndex+1].classList.contains('wall') && 
                pacmanIndex % width < width-1
                ) pacmanIndex += 1
                if(pacmanIndex === 391){
                    pacmanIndex = 364
                }
            break
        case 40:
            if( 
                !squares[pacmanIndex + width].classList.contains('ghost-lair') &&
                !squares[pacmanIndex+width].classList.contains('wall') && 
                pacmanIndex + width < width*width
                ) pacmanIndex += width
            break
    }
    squares[pacmanIndex].classList.add('pacman')
    pacDotEating()
    pacPowerPalletEating()
}

document.addEventListener('keyup', control)


function pacDotEating(){
    if(squares[pacmanIndex].classList.contains('pac-dot')){
        squares[pacmanIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = score
    }
}

function pacPowerPalletEating(){
    if(squares[pacmanIndex].classList.contains('power-pallet')){
        squares[pacmanIndex].classList.remove('power-pallet')
        score += 10
        scoreDisplay.innerHTML = score
    }
}

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})


// move ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    console.log('moved ghost')
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random()* directions.length)]
    console.log(direction)

    ghost.timerId = setInterval(function(){
        if( 
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
            ) {
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost')

                ghost.currentIndex += direction
                
                squares[ghost.currentIndex].classList.add(ghost.className)
                squares[ghost.currentIndex].classList.add('ghost')

                if(squares[ghost.currentIndex].classList.contains('pacman')){
                    alert('You Loose')
                    ghosts.forEach(ghost => clearInterval(ghost.timerId))
                    document.removeEventListener('keyup', control)
                }
            } else direction = directions[Math.floor(Math.random() * directions.length)]
    }, ghost.speed)
}
