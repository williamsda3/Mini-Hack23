//document.addEventListener('keydown', (KeyboardEvent.code) => {console.log(keyboardEvent)})


// text area to display game update 
let inputField = document.getElementById("timer");
let playerMove = document.querySelector("p");
let p1Choice =document.getElementById("p1choice");
let buttATK = document.getElementById("ATK");
let game = document.getElementById("game");
let duel = document.getElementById("Duel");
let p1PWR =  document.getElementById("p1PWR");
let help = document.getElementById("???");
let p1Wait =  document.getElementById("p1Wait");
let p2Wait =  document.getElementById("p2Wait");
let p1Pic =  document.getElementById("p1Pic");
let p2Pic =  document.getElementById("p2Pic");


let gameOn = true
p1Wait.style.visibility = "hidden";
p2Wait.style.visibility = "hidden";
//p1Pic.style.visibility = "hidden";
//p2Pic.style.visibility = "hidden";


let tut = ["Each Player starts with 5 Health (HP)","And 1 base Attack Power (PWR)", "Press'W' or 'Up-Arrow' to Attack your opponent", "Press 'A or 'Right-Arrow' to Defend", "Press 'D' or 'Right-Arrow to Charge", "Doing so will increase your Attack PWR by 1"];let i = 0;


//-----Try Using Switch Cases!!------//
help.addEventListener("click", tutorial);
function tutorial() {
    i = 0;
    inputField.innerText = tut[i];
        document.getElementById("p1HP").innerHTML = " " ;
        document.getElementById("p2HP").innerHTML = " ";
        document.getElementById("p1PWR").innerHTML = " ";
        document.getElementById("p2PWR").innerHTML = " ";
        p1Wait.style.visibility = "hidden"; 
        p2Wait.style.visibility = "hidden"; 

   
    if(i == 0){
        document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
        document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
        setTimeout(function(){
            document.getElementById("p1HP").style.color = "#90ee90";
            document.getElementById("p2HP").style.color = "#90ee90";
            i++;
        }, 500);
         setTimeout(function(){ 
        inputField.innerText = tut[i];
      
        p1PWR.innerText = `PWR: ${player1.ATK}`;
        document.getElementById("p2PWR").innerHTML =` PWR: ${player2.ATK}`;
       document.getElementById("p1HP").style.color = "black";
         document.getElementById("p2HP").style.color = "black"; document.getElementById("p1PWR").style.color = "#D10000";
        document.getElementById("p2PWR").style.color = "#D10000"; 
         i++
        }, 3500);
        setTimeout(function(){
               
             inputField.innerText = tut[i];
             i++
             }, 6500);
         setTimeout(function(){
              
             inputField.innerText = tut[i];
             i++; 
             }, 9500);
        setTimeout(function(){
            
               inputField.innerText = tut[i-1];
               i++
             }, 11500); 
         setTimeout(function(){
            
                inputField.innerText = tut[i-1];
                i++
              }, 16500); 
        setTimeout(function(){
            
                inputField.innerText = tut[i-1];
                i++
              }, 20000); 
    }
    
        
        console.log(i);
        console.log(tut[i-1])
         
       
 }       
         
        

 
  
   
    


    

// Create a function to update the player stats
function updateStats(){

    
        p1Pic.style.visibility = "visible";
        p2Pic.style.visibility = "visible";

   
    setTimeout(function(){   
        p1Wait.style.visibility = "visible";  
        p2Wait.style.visibility = "visible";
        p1Pic.style.visibility = "hidden";
        p2Pic.style.visibility = "hidden";

       


      },1000);
if(player1.baseHP || player2.baseHP === 0){


    if(player1.baseHP <= 0){
        inputField.innerText = "Player 2 wins!";
        document.getElementById("Name--1").style.color = "#90ee90";
        
    }

    else if(player2.baseHP <= 0){
        inputField.innerText = "Player 1 wins!";
         document.getElementById("Name--0").style.color = "#90ee90";
         
    }
    
}



     document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
     document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
     p1PWR.innerText = `PWR: ${player1.ATK}`;
     document.getElementById("p2PWR").innerHTML =` PWR: ${player2.ATK}`;

 }


// creating variables for buttons
let startGame = document.getElementById("NewGame");
let resetGame = document.getElementById("restartGame");

//Creating variables for the players move choices
let player1_Move;
let player2_Move;
let player1_choice = false; 
let player2_choice = false;


// Player 1 attributes
const player1 = {
    baseHP : 5,
    ATK : 1,
    CRG : 0,
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
    CRG : 0,
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

 //
// addEventListener -- When the 'start game' button is clicked, the game should initialize
//startGame.addEventListener("click",function(){
   
    //display health at beginning
 

 /* Create a way for players to input their move choice------- old 'working' behavior (doesn't update stats properly)
    let player1_Move =  prompt("Player 1, enter your move:");
   
    let player2_Move = prompt("Player 2, enter your move:");  //----------old 'working' behavior ^^^
 */
    //TODO Create a way for player prevent player's attacking 3 times in a row //
  
 
    
//---Trying to use keyboard input  instead of prompt()----------------------  (you can comment this section and uncomment the section above to see the old but 'working' behavior)  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  //    window.addEventListener('keyup', (e) => {   
        /*
        if (e.defaultPrevented) {
            return; // Do nothing if event already handled
          }     
                       // * position the statements in the right was so that it updates the stats after each duel interaction
       switch(e.code){

       

        // *filler*  once the game starts it will listen and assign what key is pressed to the player_move variable. Later on the two choices will be compared (how duel would)
        case "KeyW":
            player1_Move = "a";
            player1_choice = true;
            break;
        case "KeyA":
           player1_Move = "b";
           player1_choice = true;
            break;
        case "KeyD":
            player1_Move = "c";
            player1_choice = true;
            break;

         case "ArrowUp":
            player2_Move = "a";
            player2_choice = true;
            break;
        case "ArrowLeft":
            player2_Move = "b";
            player2_choice = true;
            break;
        case "ArrowRight":
             player2_Move = "c";
             player2_choice = true;
             
             break;
             
       }
       

        */
//})

//---------------https://javascript.info/css-animations

function restartGame() {
    player1.baseHP = 5;
    player2.baseHP = 5;
    player1.ATK = 1;
    player2.ATK = 1;
    inputField.innerText = " ";
    document.getElementById("Name--1").style.color = "black";
    document.getElementById("Name--0").style.color = "black";
    document.getElementById("p1HP").style.color = "black";
    document.getElementById("p2HP").style.color = "black";
    document.getElementById("p1PWR").style.color = "black";
    document.getElementById("p2PWR").style.color = "black";
    p2Pic.style.visibility = "hidden"; p2Pic.style.visibility = "hidden";




}
window.addEventListener('keyup', (e) => { 
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
      }  
      
   
                  
   switch(e.code){

    case"KeyR":
    restartGame();
    updateStats();
    break;
   }

});

// <i class="fa-solid fa-spinner fa-spin-pulse"></i> //
//   -------Maybe add checkmark once player selects move------ //
startGame.addEventListener("click", function(){

    
    
    restartGame();
    updateStats();
// On load, the window will be listening for keyboard input. 
window.addEventListener('keyup', (e) => {   
        
          
            if (e.defaultPrevented) {
                return; // Do nothing if event already handled
              }  
              
           
                          
           switch(e.code){
    
           
           
            
            // Once the game starts it will listen and assign what key is pressed to the player_move variable. Later on the two choices will be compared (duel)
            case "KeyW":
                player1_Move = "a";
                player1_choice = true;
                p1Pic.src = "pics/attack.jpg";
                p1Wait.style.visibility = "hidden"; 
                p1Pic.style.visibility = "hidden";
                
                break;
            case "KeyA":
               player1_Move = "b";
               player1_choice = true;
               p1Pic.src = "pics/block.jpg";
               p1Wait.style.visibility = "hidden"; 
               p1Pic.style.visibility = "hidden";
                break;
            case "KeyD":
                player1_Move = "c";
                player1_choice = true;
                p1Pic.src = "pics/charge.jpg";
                p1Wait.style.visibility = "hidden"; 
                p1Pic.style.visibility = "hidden";
                break;
    
             case "ArrowUp":
                player2_Move = "a";
                player2_choice = true;
                p2Pic.src = "pics/attack.jpg";
                p2Wait.style.visibility = "hidden"; 
                p2Pic.style.visibility = "hidden";
                break;
            case "ArrowLeft":
                player2_Move = "b";
                player2_choice = true;
                p2Pic.src = "pics/block.jpg";
                p2Wait.style.visibility = "hidden"; 
                p2Pic.style.visibility = "hidden";
                break;
            case "ArrowRight":
                 player2_Move = "c";
                 player2_choice = true;
                 p2Pic.src = "pics/charge.jpg";
                 p2Wait.style.visibility = "hidden"; 
                 p2Pic.style.visibility = "hidden";
                 
                 break;
            
               
                 
           }

          
           
           round();
            
    })

    // Function will check if both players selection a choice, if so it will call a duel
    function round(){

        if(player1_choice && player2_choice){
        //setTimeout(() => { duell();  }, 3000);
        //p1Pic.style.visibility = "visible";
        //p2Pic.style.visibility = "visible";


            duell();
           
        }
        if(player1_choice){
            
          p1Wait.style.visibility = "hidden"; 
          p1Pic.style.visibility = "hidden";
 
               
        }
         if(player2_choice){
            p2Wait.style.visibility = "hidden";
            p2Pic.style.visibility = "hidden";

        
        }
        

        
    }

    
 
            


   
    
// Function will compare the players move selection and produce the corresponding outcome 
    function duell(){ 

         player1_choice = false;
         player2_choice = false;
        
         
        
                
       
        updateStats();
        if(player1.baseHP <= 0){
           // document.getElementById("p1HP").innerHTML = "Player 2 Wins!";
        }
    
        if(player2.baseHP <= 0){
          //  document.getElementById("p1HP").innerHTML = "Player 1 Wins!";
        }


        // If player 1 Attacks and player 2 Charges:
        if(player1_Move == "a" && player2_Move == "c"){
            player2.baseHP -= player1.ATK;
             player1.ATK = 1;
           player2.ATK++;
           player1.blockCount = 0;
           player2.blockCount = 0;
            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            inputField.innerText = "Player 1 Attacked while Player 2 was Charging!";

            updateStats();
            
            round();
            
               }
    
        // If both players Attack
         if(player1_Move == "a" && player2_Move == "a"){
            if(player1.ATK < player2.ATK){
                player1.baseHP -= (player2.ATK - player1.ATK);
                player2.ATK = 1;
                player1.ATK = 1;
                player1.blockCount = 0;
                player2.blockCount = 0;
                console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
                updateStats();
               inputField.innerText = "Player 2 Overpowered Player 1's Attack!";
                round();
            }

            // If the player 1 has more Attack Power than the player 2, player 2 will receive the attack difference
            else if(player1.ATK > player2.ATK){
                player2.baseHP -= (player1.ATK - player2.ATK);
                player2.ATK = 1;
                player1.ATK = 1;
                player1.blockCount = 0;
                player2.blockCount = 0;
                console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
                inputField.innerText = "Player 1 Overpowered Player 2's Attack!";
                updateStats();
                round();
                }
            else{
                player1.ATK = 1;
                player2.ATK = 1;
                player1.blockCount = 0;
                player2.blockCount = 0;
                console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
                inputField.innerText = "Both players Attacked!";
                updateStats();
                round();
            }  
            }

            // If player 1 Charges and player 2 Attacks:
         if(player1_Move == "c" && player2_Move == "a"){
            player1.baseHP -= player2.ATK;
            player1.ATK++;
            player2.ATK = 1;
            player1.blockCount = 0;
            player2.blockCount = 0;
            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            inputField.innerText = "Player 2 Attacked while player 1 was Charging!";
            updateStats();
            round();
         }

           // If player 
         if(player1_Move == "a" && player2_Move == "b"){
            if(player2.blockCount > 1){
                player2.baseHP -= player1.ATK;
                console.log("player 2 shield Broken!");
                console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
                inputField.innerText = "Player 2 shield Broken!";
                updateStats();
                round();
                player1.ATK = 1;
                player2.blockCount++;
                player1.blockCount = 0;
    
            }
            if(player2.blockCount == 1){
                player1.ATK = 1;
            player2.blockCount++;
                        player1.blockCount = 0;

            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            updateStats();
            round();
            inputField.innerText = "Player 2 has one block remaining!";
         }
            if(player2.blockCount < 1){
            player1.ATK = 1;
            player2.blockCount++;
            player1.blockCount = 0;

            
            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            inputField.innerText = "Player 2 blocked Player 1's Attack!";
            updateStats();
            round();
         }
        }
    
        if(player1_Move == "b" && player2_Move == "a"){
            if(player1.blockCount > 1){
                player1.baseHP -= player2.ATK;
                console.log("player 1 shield Broken!");
                console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
                inputField.innerText = "Player 1 shield Broken!"
                updateStats();
                round();
                player2.blockCount = 0;
            }
            if(player1.blockCount == 1){
                player2.ATK = 1;
            player1.blockCount++;
            player2.blockCount = 0;

            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            updateStats();
            round();
            inputField.innerText = "Player 1 has one block remaining!";
         }
            if(player1.blockCount < 1){
            player2.ATK = 1;
            player1.blockCount++;
            player2.blockCount = 0;

            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            inputField.innerText = "Player 1 blocked Player 2's Attack!";
            updateStats();
            round();
         }
        }
        if(player1_Move == "b" && player2_Move == "c"){
                player1.blockCount++;
                player2.ATK++;
                player2.blockCount = 0;
                inputField.innerText = "Player 1 Blocked while Player 2 Charged!";
                updateStats();
                round();
        }
        if(player1_Move == "c" && player2_Move == "b"){
            player2.blockCount++;
            player1.ATK++;
            inputField.innerText = "Player 1 Charged while Player 2 Blocked!";

            updateStats();
            round();
    }
    
        if(player1_Move == "c" && player2_Move == "c"){
            player1.ATK++;
            player2.ATK++;
            player1.blockCount = 0;
            player2.blockCount = 0;
            console.log("Both players charged!");
            console.log(`p1 HP : ${player1.baseHP} p1 PWR : ${player1.ATK} , p2 HP : ${player2.baseHP}, p2 PWR : ${player2.ATK} `);
            inputField.innerText = "Both players charged!";
            updateStats();
            round();
    
        }
        if(player1_Move == "b" && player2_Move == "b"){
        player1.blockCount++;
        player2.blockCount++;

        inputField.innerText = "Both players blocked! Nothing happened";
     }
   }
});
    


      /* 
       if(p1ATKp2){ 
        player2.baseHP -= player1.ATK;
        player2.CRG++;
        console.log(`p1 hp : ${player1.baseHP} , p2 hp : ${player2.baseHP}, p2 CRG : ${player2.CRG} `);
       }
       */
       
   /*    function updateStats(){
        // player1.removeCharge();
        // player2.removeCharge();
       // updateStats();
         document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
         document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
         document.getElementById("p1PWR").innerHTML =` PWR: ${player1.ATK}`;
         document.getElementById("p2PWR").innerHTML =` PWR: ${player2.ATK}`;
     
     }
     */
   //     })


//-------------------------------------------------------------------- everything bellow this is liarfguhvrusfhcwufhmksaj,fhmckiutvkfuc----------------------------------------------------//




//})

    // Creating 'base cases' for every player interaction outcome

    /*


    if (player1_Move == "b" && player2_Move == "a") {

       
        if(player1.blockCount == 2){
            playerMove.innerText = "Player 1 has no more block remaining!";
            
           player1.blockCount++;
           player2.CRG = 0;
           player2.ATK = 1;
        }


        // if player 1 tried to block after already blocking twice in a row, their next block will fail. //
       else if(player1.blockCount >= 2){
            player1.baseHP -= (player2.ATK + player2.CRG);
            playerMove.innerText = "Player 2's Attack went through!"; 
            player1.blockCount = 0;
            player2.CRG = 0;
           // player2.removeCharge();
        }
        
        else{
        playerMove.innerText = "Player 1 Defended Player 2's Attack!"
        player1.blockCount++;
        player2.CRG = 0;
        }
      //  player2.removeCharge();
    }


    if (player1_Move == "b" && player2_Move == "b") {
        playerMove.innerText = "Both players blocked! Nothing happened";
        player1.blockCount++;
    }
        


    if (player1_Move == "b" && player2_Move == "c") {
        player2.CRG++;
        player2.hasCharge = true;
        playerMove.innerText = "Player 1 Defended, Player 2 is charging up!";
         player1.blockCount++;
         prompt("Player 1 Defended, Player 2 is charging up!");
         updateStats();
    }
       

        // if player 2 tried to block after already blocking twice in a row, their next block will fail. //
    if (player1_Move == "a" && player2_Move == "b") {

        if(player2.blockCount == 2){
            playerMove.innerText = "Player 2 has no more block remaining!";
           player2.blockCount++;
           player1.CRG = 0;
         //  player1.removeCharge();
        }

        if(player2.blockCount >= 2){
            player2.baseHP -= (player1.ATK - player1.CRG);
            playerMove.innerText = "Player 2's Attack went through!";
            player2.blockCount = 0;
            player1.CRG = 0;
          //  player1.removeCharge();
        }
        
        else{
        playerMove.innerText ="Player 2 Defended Player 1's Attack!";
        player2.blockCount++;
        player1.CRG = 0;
        }
       // player1.removeCharge();
    }


    if (player1_Move == "c" && player2_Move == "b") {
        player1.CRG++;
        player1.hasCharge = true;
        playerMove.innerText ="Player 1 is charging up! Player 2 Defended";
        player2.blockCount++;
        prompt("Player 2 has no more block remaining!");
    }


    if (player1_Move == "a" && player2_Move == "a") {
       if(player1.ATK > player2.ATK){
        player2.baseHP -= ((player1.ATK + player1.CRG) - (player2.ATK + player2.CRG));
        playerMove.innerText ="Player 1' Attack overpowered Player 2's Attack!";
        player1.CRG = 0;
        player2.CRG = 0;
        player2.removeCharge();
        updateStats();


       }
       if(player2.ATK > player1.ATK){
        player1.baseHP -= ((player2.ATK + player2.CRG) - (player1.ATK + player1.CRG));
        playerMove.innerText ="Player 2' Attack overpowered Player 1's Attack!";
        //player1.removeCharge();
        player1.CRG = 0;
        player2.CRG = 0;
       }

       else{
        player2.baseHP -= player1.ATK;
        player1.baseHP -= player2.ATK;
        playerMove.innerText = "Both Player's Attacked!";
       }
       player1.CRG = 0;
       player2.CRG = 0;
       // player1.removeCharge();
       // player2.removeCharge();

    }


    if (player1_Move == "a" && player2_Move == "c") {
        player2.baseHP -= player1.ATK;
        player2.CRG++;
        player2.hasCharge = true;
        player1.CRG = 0;
        //player1.removeCharge();
        playerMove.innerText ="Player 1 Attacked while player 2 was charging!";
    }


    if (player1_Move == "c" && player2_Move == "a") {
        player1.baseHP -= player2.ATK;
        player1.CRG++;
        player1.hasCharge = true;
        player2.CRG = 0;
        player2.removeCharge();
        playerMove.innerText ="Player 2 Attacked while player 1 was charging!";
    }


    if (player1_Move == "c" && player2_Move == "c") {
        player2.CRG++;
        player1.CRG++;
        player1.hasCharge = true;
        player2.hasCharge = true;
        playerMove.innerText ="Both players charged up!";
    }


    // Show the HP status of both players
    
    



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

   //updateStats();


        
    //------------------------------
    //charge doesn't update correctly  :( // 

})
//threads to have syncr

function updateStats(){
   // player1.removeCharge();
   // player2.removeCharge();
  // updateStats();
    document.getElementById("p1HP").innerHTML =` HP: ${player1.baseHP}`;
    document.getElementById("p2HP").innerHTML =`HP: ${player2.baseHP}`;
    document.getElementById("p1PWR").innerHTML =` PWR: ${player1.CRG}`;
    document.getElementById("p2PWR").innerHTML =` PWRR: ${player2.CRG}`;

}
    


*/
