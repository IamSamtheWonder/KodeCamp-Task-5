// const dice = Math.trunc(Math.random() * 6 + 1) ;
// console.log(dice);


let sum = 0;
// // const sum = 0; Throws error message, please why sir?
let playerActive = 0;
let TotalScore = [0,0]; // Index 0 for Player 1, Index 1 for Player 2
let gameOn = true; // State Variable


let player1Score = document.querySelector('#score--0').textContent = "0";
let player2Score = document.querySelector('#score--1').textContent = "0";

document.querySelector(".dice").style.display = "none";

const btnRoll = document.querySelector('.btn--roll');
const play = btnRoll.addEventListener('click', function() {

    if (gameOn) {
         // let sum = 0; Throws error message, please why sir?
    const dice = Math.trunc(Math.random() * 6 + 1) ;
    console.log(dice);

    document.querySelector(".dice").style.display = "block";

    const current1 = document.querySelector("#current--" + playerActive);
    const current0 = current1.textContent = dice;

    const imgDice = document.querySelector('.dice');
    // imgDice.src = 'image/dice-' + dice + '.png'; Alternative
    const newImagePath = 'image/dice-' + dice + '.png';
    imgDice.src = newImagePath;

    
    // let sum = 0; Throws error, please why sir?
    if (dice > 1) {
        sum += dice;
        current1.textContent = sum;
    }

    else {
        // Switch to the Next Player
       switchPlayer();
    
    }

    }
    
});



const btnHold = document.querySelector(".btn--hold");
const hold = btnHold.addEventListener("click", function() {
    // Add and Display Current Score in sum to the Total score
 
    if (gameOn) {
        TotalScore[playerActive] += sum; 

        let score1 = document.querySelector("#score--0").textContent = TotalScore[0];
        let score2 = document.querySelector("#score--1").textContent = TotalScore[1];

        // Declears the Winner!
        if (TotalScore[playerActive] >= 20) {
        document.querySelector("#score--" + playerActive).textContent = TotalScore[playerActive];
        console.log('Current Player Wins!');

        document.querySelector('.player--' + playerActive).classList.add('player--winner');
        document.querySelector('.player--' + playerActive).classList.remove('player--active');

        gameOn = false;

        document.querySelector(".dice").style.display = "none";

    }

    else {
    // Switch Player
    // playerActive = playerActive = 0 ? 1 : 0; 
    switchPlayer(); 
}
    }
    
    
});


let btnNew = document.querySelector(".btn--new");
let newBtn = btnNew.addEventListener('click', function() {
    sum = 0;
    playerActive = 0;
    TotalScore = [0, 0];
    
    let player1Score = document.querySelector('#score--0').textContent = "0";
    let player2Score = document.querySelector('#score--1').textContent = "0";

    document.querySelector("#current--0").textContent = "0";
    document.querySelector("#current--1").textContent = "0";


    document.querySelector(".dice").style.display = "none";

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');

    gameOn = true;

}); 



function switchPlayer () {
    playerActive = playerActive === 0 ? 1 : 0; 
       sum = 0; // Reset current score

       let currentPlayer1 = document.querySelector('#current--0');
       let currentPlayer2 = document.querySelector('#current--1');

       currentPlayer1.textContent = "0";
       currentPlayer2.textContent = "0";

       document.querySelector(".player--0").classList.toggle("player--active");
       document.querySelector(".player--1").classList.toggle("player--active");
};






