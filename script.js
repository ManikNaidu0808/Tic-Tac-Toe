let music = new Audio("GameOn.mp3");
let audioTurn = new Audio("tong.mp3");
let gameover = new Audio("GameOver.mp3");
let turn = "X";
let isgameover = false; // Initialize game over flag as false

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {

    // if (isgameover) {
    //     alert("Game Over. Press any key to play again");
    //     return; // Exit the function to prevent further moves
    // }

    //Posibilities to win
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,5,5,0],
        [3, 4, 5,5,15,0],
        [6, 7, 8,5,25,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won ";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('iframe')[0].style.width = '300px';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`  ;
            document.querySelector(".line").style.width = '20vw';
    }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (!isgameover && boxtext.innerText === '') { // Check if the game is not over and the box is empty
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onClick listner to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = '';
    });
    turn = "X"
        isgameover=false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('iframe')[0].style.width = '0px';
        document.querySelector(".line").style.width = '0' 
    
})
