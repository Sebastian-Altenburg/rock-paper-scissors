
    let div = document.createElement("div");
    div.style.textAlign = "center";
    let playerSelection;
    let computerSelection;
    let counter = 0;
    let playerCount = 0;
    let computerCount = 0;
    // Buttons
    let btnRock = document.getElementById("rock");
    let btnPaper = document.getElementById("paper");
    let btnScissors = document.getElementById("scissors");

    // Added Events to Buttons
   
    btnRock.addEventListener("click",       ()=> {playRound("Rock", computerPlay());});
    btnPaper.addEventListener("click",      ()=> {playRound("Paper", computerPlay());});
    btnScissors.addEventListener("click",   ()=> {playRound("Scissors", computerPlay());});

    

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function playRound(playerSelection, computerSelection){

    

    // nur zum Testen
//   alert("Computer chose: " + computerSelection);
//   alert("Player chose: " + playerSelection);

    // Ermitteln des Ergebnisses und Counter feststellen
    //Player Wins!
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerCount++;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerCount++;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerCount++;
    }
    //Ties
    else if (playerSelection == "Paper" && computerSelection == "Paper") {                                       
        playerCount++;
        computerCount++;
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock") {
        playerCount++;
        computerCount++;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        playerCount++;
        computerCount++;
    }
    //Comp wins!
    else{
        computerCount++;
    }


                                                                                                /////////////////
    let playerChoice = document.createElement("p");
    playerChoice.textContent = "The Player chose:" + playerSelection; 
    playerChoice.style.fontSize = "15px";
    div.appendChild(playerChoice);

    let compChoice = document.createElement("p");
    compChoice.textContent = "The Computer chose: "+ computerSelection;
    compChoice.style.fontSize = "15px";
    div.appendChild(compChoice);
                                                                                                //////////////////

    let playerRes = document.createElement("p");
    playerRes.textContent = "The player got: " + playerCount + "points!";
    playerRes.style.fontSize = "15px";
    div.appendChild(playerRes);

    let compRes = document.createElement("p");
    compRes.textContent = "The computer got: " + computerCount + "points!";
    compRes.style.fontSize = "15px";
    div.appendChild(compRes);                                                                   ///////////////////


    if (playerCount == 5) {
        let playerWins = document.createElement("p");                                                 
        playerWins.textContent = "The player won the game!!";
        playerWins.style.fontSize = "50px";
        div.appendChild(playerWins);
    }
    else if(computerCount == 5){
        let compWins = document.createElement("p");
        compWins.textContent = "The Computer won the game!!";
        compWins.style.fontSize = "50px";
        div.appendChild(compWins);
    }
    else if(computerCount == 5 && playerCount == 5){
        let aTie = document.createElement("p");
        aTie.textContent = "Tied!!";
        aTie.style.fontSize = "50px";
        div.appendChild(aTie);
    }                                                                                                   ///////////
    document.querySelector("body").appendChild(div);
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computerPlay(){
    let computerChoose = ["Rock", "Paper", "Scissors"];
    let getAction = computerChoose[Math.floor(Math.random() * computerChoose.length)];
    return getAction;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                                                                   
                                                                                                    















