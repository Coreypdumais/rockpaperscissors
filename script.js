function computerPlay() {

for (let step = 0; step < 5; step++) {

    //player selects rock paper or scissors
    var playerSelection = window.prompt("Select rock paper or scissors: ");
    
    //all lowercase to compare
    let playerChoice = playerSelection.toLowerCase();
    //make sure user selected rock paper or scissors
    
    // set the array for options the computer can pick//
    const rpsChoices = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    //randomly select one of the choices for computer
    var computerAnswer = rpsChoices[Math.floor(Math.random()*rpsChoices.length)];
    //all lowercase to compare
    var computerChoice = computerAnswer.toLowerCase();

    console.log("You have selected " + playerChoice + " and the computer has selected " + computerChoice);

     //if tie
        if (computerChoice == playerChoice){
            console.log("You have tied with the computer!")
        }

        //if win
        if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
            console.log("You have defeated the computer!")
        }

        //if loss 
        if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
            console.log("You have lost to the computer!")
        } 
    }
}