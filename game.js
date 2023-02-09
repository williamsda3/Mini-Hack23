//document.addEventListener('keydown', (KeyboardEvent.code) => {console.log(keyboardEvent)})


// text area to display game update 
let inputField = document.getElementById("Result");
let playerMove = document.querySelector("p");


// creating variables for buttons
let startGame = document.getElementById("startGame");
let resetGame = document.getElementById("restartGame");


// player 1 attributes
const player1 = {
    baseHP : 5,
    ATK : 1,
    hasCharge : false,
    timesATK : 0,
    removeCharge(){
   if(player1.hasCharge){
        player1.ATK = 1;
        player1.hasCharge = false;
    }
    }
   
}

// player 2 attributes  
const player2 = {
    baseHP : 5,
    ATK : 1,
    hasCharge : false,
    timesATK : 0,
    removeCharge(){
    if(player2.hasCharge){
        player2.ATK = 1;
        player2.hasCharge = false;
    }
}
}


// addEventListener -- When the 'start game' button is clicked, the game should initialize
startGame.addEventListener("click", function(){

// Create a way for player 1 to input their move choice
    let player1_Move =  prompt("Player 1, enter your move:");


// Create a way for player 1 to input their move choice
    let player2_Move = prompt("Player 2, enter your move:");

    //TODO Create a way for player prevent player's attacking 3 times in a row //


    // Creating 'base cases' for every player interaction outcome
    if (player1_Move == "d" && player2_Move == "a") {
        playerMove.innerText = "Player 1 Defended Player 2's Attack!"
        player2.removeCharge();
    }


    if (player1_Move == "d" && player2_Move == "d") {
        playerMove.innerText = "Both players blocked! Nothing happened";
    }


    if (player1_Move == "d" && player2_Move == "c") {
        player2.ATK++;
        player2.hasCharge = true;
        playerMove.innerText = "Player 1 Defended, Player 2 is charging up!";
    }


    if (player1_Move == "a" && player2_Move == "d") {
        player1.removeCharge();
        playerMove.innerText ="Player 2 Defended Player 1's Attack!";
    }


    if (player1_Move == "c" && player2_Move == "d") {
        player1.ATK++;
        player1.hasCharge = true;
        playerMove.innerText ="Player 1 is charging up! Player 2 Defended";
        
    }


    if (player1_Move == "a" && player2_Move == "a") {
        player1.baseHP -= player2.ATK;
        player2.baseHP -= player1.ATK;
        player1.removeCharge();
        player2.removeCharge();
        playerMove.innerText ="Both players attacked!";
    }


    if (player1_Move == "a" && player2_Move == "c") {
        player2.baseHP -= player1.ATK;
        player2.ATK++;
        player2.hasCharge = true;
        player1.removeCharge();
        playerMove.innerText ="Player 1 Attacked while player 2 was charging!";
    }


    if (player1_Move == "c" && player2_Move == "a") {
        player1.baseHP -= player2.ATK;
        player1.ATK++;
        player1.hasCharge = true;
        player2.removeCharge();
        playerMove.innerText ="Player 2 Attacked while player 1 was charging!";
    }


    if (player1_Move == "c" && player2_Move == "c") {
        player2.ATK++;
        player1.ATK++;
        player1.hasCharge = true;
        player2.hasCharge = true;
        playerMove.innerText ="Both players charged up!";
    }


    // Show the HP status of both players
    document.getElementById("demo").innerHTML =`Player 1 HP = ${player1.baseHP} Player 2 HP = ${player2.baseHP}`;



    // Find a way to display the game's winner
    if (player1.baseHP <= 0 && player2.baseHP <= 0) {
        prompt("It's a tie!!");
    }


    else if (player1.baseHP <= 0) {
        prompt("Player 2 wins!");
    }


    else if (player2.baseHP <= 0) {
        prompt("Player 1 wins!");
    }

   
    
})
//threads to have syncr




