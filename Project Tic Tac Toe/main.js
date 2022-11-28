"use strict";
function escapeRegExp(string, re) {
    return string.replace(re); // $& means the whole matched string
  }

const Gameboard = (name1, name2) => {
    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    const h1 = document.querySelector("h1")

    const gridClick = (e) =>{
        const className = (e.currentTarget);
        console.log(className);
        const re = /(["'])(?:(?=(\\?))\2.)*?\1/g;
        const target = escapeRegExp(className, re)
        console.log(target);
        if (h1.textContent === `${getPlayer1Name()} turn`){
            e.textContent = "X"
        }else{
            e.textContent = "0"
        }
    }
    for(let items of gameBoard){
        // Init Grid
        const body = document.querySelector("body")
        const div = document.createElement("div")
        div.classList.add(`grid${gameBoard.indexOf(items) + 1}`)
        var getPlayer1Name = () => name1;
        var getPlayer2Name  = () => name2;
        body.appendChild(div)
        for (let i =0; i < items.length; i++){
            const button = document.createElement("button")
            button.classList.add(`box${i + 1}`)
            // console.table(items)
            button.onclick = function(e){gridClick(e)};
            // if (item == 1){
            //     button.textContent = "X"
            // }
            // else if (item == 2){
            //     button.textContent = "O"
            // }
            div.appendChild(button)
        }
        // let gamePrompt = prompt("Start a Game of Tic Tac Toe ?");
        let gamePrompt = "yes";
        if (gamePrompt === "yes"){
            const randomiser = Math.floor(Math.random() * 2) 
            if (randomiser === 0) {
                h1.textContent = `${getPlayer1Name()} turn`
            }
            if (randomiser === 1) {
                h1.textContent = `${getPlayer2Name()} turn`
            }
        }
    }
}
    // return { name1, name2};}}

Gameboard("Jalal", "Hesham")

// pLayer 1 will have an X, player 2 will have an O