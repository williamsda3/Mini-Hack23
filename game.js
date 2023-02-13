//document.addEventListener('keydown', (KeyboardEvent.code) => {console.log(keyboardEvent)})


// text area to display game update 
let inputField = document.getElementById("Result");
let playerMove = document.querySelector("p");
let p1Choice =document.getElementById("p1choice");
let buttATK = document.getElementById("ATK");
let game = document.getElementById("game");


// creating variables for buttons
let startGame = document.getElementById("New Game");
let resetGame = document.getElementById("restartGame");

let player1_Move;
let player2_Move;
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
    },
    blockCount : 0
   
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
},
    blockCount : 0
}


// addEventListener -- When the 'start game' button is clicked, the game should initialize
startGame.addEventListener("click", function(){
    
   
    //display health at beginning
    document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
    document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
    document.getElementById("p1PWR").innerHTML =` PWR: ${player1.ATK}`;
    document.getElementById("p2PWR").innerHTML =` PWR: ${player2.ATK}`;

 /* Create a way for players to input their move choice------- old 'working' behavior (doesn't update stats properly)
    let player1_Move =  prompt("Player 1, enter your move:");
   
    let player2_Move = prompt("Player 2, enter your move:");  //----------old 'working' behavior ^^^
 */
    //TODO Create a way for player prevent player's attacking 3 times in a row //

//---Trying to use keyboard input  instead of prompt()----------------------  (you can comment this section and uncomment the section above to see the old but 'working' behavior)  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
      window.addEventListener('keydown', (e) => {                        // * position the statements in the right was so that it updates the stats after each duel interaction
       switch(e.code){


        // *filler*  once the game starts it will listen and assign what key is pressed to the player_move variable. Later on the two choices will be compared (how duel would)
        case "KeyA":
            player1_Move = "a";
            break;
        case "KeyZ":
           player1_Move = "b";
            break;
        case "KeyC":
            player1_Move = "c";
            break;

         case "KeyJ":
            player2_Move = "j";
            break;
        case "KeyK":
            player2_Move = "k";
            break;
        case "KeyL":
             player2_Move = "l";
             break;
             
       }

       
       
})
     if(player1_Move == "a" && player2_Move == "l"){
            prompt("Player 1 Attacked while player 2 was charging!");
        }

        
    //------------------------------

    // Creating 'base cases' for every player interaction outcome
    if (player1_Move == "b" && player2_Move == "a") {

       
        if(player1.blockCount == 2){
            playerMove.innerText = "Player 1 has no more block remaining!";
            
           player1.blockCount++;
        }


        // if player 1 tried to block after already blocking twice in a row, their next block will fail. //
       else if(player1.blockCount >= 2){
            player1.baseHP -= player1.ATK;
            playerMove.innerText = "Player 2's Attack went through!"; 
            player1.blockCount = 0;
        }
        
        else{
        playerMove.innerText = "Player 1 Defended Player 2's Attack!"
        player1.blockCount++;
        }
        player2.removeCharge();
    }


    if (player1_Move == "b" && player2_Move == "b") {
        playerMove.innerText = "Both players blocked! Nothing happened";
        player1.blockCount++;
    }
        


    if (player1_Move == "b" && player2_Move == "c") {
        player2.ATK++;
        player2.hasCharge = true;
        playerMove.innerText = "Player 1 Defended, Player 2 is charging up!";
         player1.blockCount++;
    }
       

        // if player 2 tried to block after already blocking twice in a row, their next block will fail. //
    if (player1_Move == "a" && player2_Move == "b") {

        if(player2.blockCount == 2){
            playerMove.innerText = "Player 2 has no more block remaining!";
           player2.blockCount++;
        }

        if(player2.blockCount >= 2){
            player2.baseHP -= player1.ATK;
            playerMove.innerText = "Player 2's Attack went through!";
            player2.blockCount = 0;
        }
        
        else{
        playerMove.innerText ="Player 2 Defended Player 1's Attack!";
        player2.blockCount++;
        }
        player1.removeCharge();
    }


    if (player1_Move == "c" && player2_Move == "b") {
        player1.ATK++;
        player1.hasCharge = true;
        playerMove.innerText ="Player 1 is charging up! Player 2 Defended";
        player2.blockCount++;
    }


    if (player1_Move == "a" && player2_Move == "a") {
       if(player1.ATK > player2.ATK){
        player2.baseHP -= (player1.ATK - player2.ATK);
        playerMove.innerText ="Player 1' Attack overpowered Player 2's Attack!";

       }
       if(player2.ATK > player1.ATK){
        player1.baseHP -= (player2.ATK - player1.ATK);
        playerMove.innerText ="Player 2' Attack overpowered Player 1's Attack!";

       }

       else{
        player2.baseHP -= player1.ATK;
        player1.baseHP -= player2.ATK;
        playerMove.innerText = "Both Player's Attacked!";
       }
        player1.removeCharge();
        player2.removeCharge();

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
    
    document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
    document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
    document.getElementById("p1PWR").innerHTML =` PWR: ${player1.ATK}`;
    document.getElementById("p2PWR").innerHTML =` PWR: ${player2.ATK}`;



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




