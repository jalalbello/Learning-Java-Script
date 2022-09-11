let color ='black'
let click = 'true'

function changeSize(input){
    if (input >= 2 && input <= 100){
        populateBoard(input)
    }
}
function populateBoard(size){
    const board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let ammount = size * size

    for (let i =0; i < ammount; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor='white'
        board.insertAdjacentElement("beforeend", square)
    }    
}


function colorSquare(){
    if (click){

    if(color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {this.style.backgroundColor = color;
    }
    
}
}

function changeColor(choice){
    color = choice;
}

function resetboard(){
    const board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', () =>{click = !click})