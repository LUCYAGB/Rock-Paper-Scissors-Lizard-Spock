// Maps user options to corresponding images.
const HAND_OPTIONS = {
    "rock": "assets/images/rock.png",
    "paper": "assets/images/paper.png",
    "scissors": "assets/images/scissors.png",
    "lizard": "assets/images/lizard.png",
    "spock": "assets/images/spock.png",
}


let SCORE = 0;

const MAX_TRIES = 5;

let currentTryCount = 0;

/**
 * Calls the icons when clicked 
 * @param {string} hand The option selected by user.
 */
function pickPlayerHand(hand) {
  if (currentTryCount >= MAX_TRIES) {
    return;
  }

  currentTryCount++;

    // Hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //Show the result of the hand the player picked in a new page
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //Set the player choice
    document.getElementById("playerPickImage").src = HAND_OPTIONS[hand];

    // Call the computer choice function
    let computerHand = pickComputerHand();
    referee(hand, computerHand);
}


/**
 * 
 */
function pickComputerHand() {
    let hands = ["rock", "paper", "scissors", "lizard", "spock"];
    // Let the computer pick a choice randomly
    let computerHand = hands[Math.floor(Math.random() * 5)];

    //Set the computer choice
    document.getElementById("computerPickImage").src = HAND_OPTIONS[computerHand];
    return computerHand;
}

function referee(playerHand, computerHand) {
  if (playerHand == computerHand) {
    setDecision("It's a tie!");
    return;
  }

   if(playerHand == "paper" && computerHand == "scissors") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "paper" && computerHand == "rock") {
     setDecision("YOU WIN!");
     setScore();
     console.log('paper rock');
   }
   if(playerHand == "paper" && computerHand == "lizard") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "paper" && computerHand == "spock") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "paper" && computerHand == "paper") {
     setDecision("It's a tie!");
   }
   if(playerHand == "paper" && computerHand == "scissors") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "rock" && computerHand == "rock") {
     setDecision("It's a tie!");
   }
   if(playerHand == "rock" && computerHand == "paper") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "rock" && computerHand == "scissors") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "rock" && computerHand == "lizard") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "rock" && computerHand == "spock") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "scisssors" && computerHand == "scissors") {
     setDecision("It's a tie!");
   }
   if(playerHand == "scissors" && computerHand == "rock") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "scissors" && computerHand == "paper") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "scissors" && computerHand == "lizard") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "scissors" && computerHand == "spock") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "lizard" && computerHand == "lizard") {
     setDecision("It's a tie!");
   }
   if(playerHand == "lizard" && computerHand == "rock") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "lizard" && computerHand == "paper") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "lizard" && computerHand == "scissors") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "lizard" && computerHand == "spock") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "spock" && computerHand == "spock") {
     setDecision("It's a tie!");
   }
   if(playerHand == "spock" && computerHand == "rock") {
     setDecision("YOU WIN!");
     setScore();
   }
   if(playerHand == "spock" && computerHand == "paper") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "spock" && computerHand == "lizard") {
     setDecision("YOU LOSE!");
   }
   if(playerHand == "spock" && computerHand == "scissors") {
    setDecision("YOU WIN!");
    setScore();
   }
}

// Reverse the previous command from pickPlayerHand()
function replayGame() {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    //Show the result of the hand the player picked in a new page
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

function setDecision(decision) {
   document.querySelector(".decision h1").innerText = decision;
}

function setScore() {
    SCORE++;
    document.querySelector(".score h1").innerText = SCORE;
}
