

const Gameboard = (name1, name2) => {
    // Init playing field
    var getPlayer1Name = () => name1;
    var getPlayer2Name  = () => name2;

    let gameBoard = [
        {id:1, content:""},
        {id:2, content:""},
        {id:3, content:""},
        {id:4, content:""},
        {id:5, content:""},
        {id:6, content:""},
        {id:7, content:""},
        {id:8, content:""},
        {id:9, content:""},
    ]
    // Append the buttons and assign the classes
    const h1 = document.querySelector("h1")
    const div1= document.createElement("div");const div2= document.createElement("div"); const div3= document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(div1); body.appendChild(div2); body.appendChild(div3);

    for (let item of gameBoard){
        const button = document.createElement("button")
        button.setAttribute("id", item.id)
        button.onclick = function(e){boxClick(e)};
        // Check on wich Div to append the buttons
        if(item.id > 6){
            div3.appendChild(button);
        }
        else if(item.id > 3){
            div2.appendChild(button);
        }
        else {
            div1.appendChild(button);
        }
    }

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
    
    // Click function of boxes
    const boxClick = (e) => {
        if(h1.textContent !== `${getPlayer1Name()} Wins` && h1.textContent !== `${getPlayer2Name()} Wins` ){
            const toggleWin = (...ids) =>{
                for (let id of ids){
                    const clickedBox = document.getElementById(id)
                    clickedBox.classList.toggle("win");
                    console.log('dash');
                }
            }
            // Decide on turn
            if (h1.textContent === `${getPlayer1Name()} turn` && gameBoard[e.target.id - 1].content === ""){
                gameBoard[e.target.id - 1].content = "X"
                h1.textContent = `${getPlayer2Name()} turn`
            }
            else if(h1.textContent === `${getPlayer2Name()} turn` && gameBoard[e.target.id - 1].content === ""){
                gameBoard[e.target.id - 1].content = "O"
                h1.textContent = `${getPlayer1Name()} turn`

            }
            for (let item of gameBoard){
                if (item.content === "X" ||item.content === "O"){
                    const clickedBox = document.getElementById(`${item.id}`)
                    clickedBox.textContent = item.content
                }
            }

            // Check for win
            // Horizontal
            if (gameBoard[0].content === "X" && gameBoard[1].content === "X" && gameBoard[2].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(1,2,3)
            }
            else if (gameBoard[0].content === "O" && gameBoard[1].content === "O" && gameBoard[2].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(1,2,3)
            }
            else if (gameBoard[3].content === "X" && gameBoard[4].content === "X" && gameBoard[5].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(4,5,6)
            }
            else if (gameBoard[3].content === "O" && gameBoard[4].content === "O" && gameBoard[5].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(4,5,6)
            }
            else if (gameBoard[6].content === "X" && gameBoard[7].content === "X" && gameBoard[8].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(7,8,9)
            }
            else if (gameBoard[6].content === "O" && gameBoard[7].content === "O" && gameBoard[8].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(7,8,9)
            }
            // Diagonal
            else if (gameBoard[0].content === "X" && gameBoard[4].content === "X" && gameBoard[8].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(1,5,9)
            }
            else if (gameBoard[0].content === "O" && gameBoard[4].content === "O" && gameBoard[8].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(1,5,9)
            }
            else if (gameBoard[2].content === "X" && gameBoard[4].content === "X" && gameBoard[6].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(3,5,7)
            }
            else if (gameBoard[2].content === "O" && gameBoard[4].content === "O" && gameBoard[6].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(3,5,7)
            }
            // Vertical 
            else if (gameBoard[0].content === "X" && gameBoard[3].content === "X" && gameBoard[6].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(1,4,7)
            }
            else if (gameBoard[0].content === "O" && gameBoard[3].content === "O" && gameBoard[6].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(1,4,7)
            }
            else if (gameBoard[1].content === "X" && gameBoard[4].content === "X" && gameBoard[7].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(2,5,8)
            }
            else if (gameBoard[1].content === "O" && gameBoard[4].content === "O" && gameBoard[7].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(2,5,8)
            }
            else if (gameBoard[2].content === "X" && gameBoard[5].content === "X" && gameBoard[8].content === "X"){
                h1.textContent = `${getPlayer1Name()} Wins`
                toggleWin(3,6,9)
            }
            else if (gameBoard[2].content === "O" && gameBoard[5].content === "O" && gameBoard[8].content === "O"){
                h1.textContent = `${getPlayer2Name()} Wins`
                toggleWin(3,6,9)
            }
        }
    }
}

    Gameboard("Jalal", "Douae")