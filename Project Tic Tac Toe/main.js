

const Gameboard = (name1, name2) => {
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
    const div1= document.createElement("div");
    const div2= document.createElement("div");
    const div3= document.createElement("div");

    const body = document.querySelector("body");
    body.appendChild(div1)
    body.appendChild(div2)
    body.appendChild(div3)
    // for (let item of gameBoard){
    //     const button = document.createElement("button")
    //     if(item.id > 6){
    //         div3.appendChild(button);
    //     }
    //     else if(item.id > 3){
    //         div2.appendChild(button);
    //     }
    //     else {
    //         div1.appendChild(button);
    //     }
    // }
    }

    Gameboard()