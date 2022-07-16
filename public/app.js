var greet = alert("HEY WELCOME TO HEAD AND TAIL GAME");

var result = document.getElementById("result");
var coin = document.getElementById("coin");
var headsScore = 0;
var tailsScore = 0;
var headsCount = document.getElementById("player1Result");
var tailsCount = document.getElementById("player2Result");


function coinFlip() {

 var randomNumber = Math.floor((Math.random() * 10) +1); 
  if (randomNumber >= 5) {
    coin.className="heads";
    headsScore ++;
    headsCount.innerHTML = headsScore;
  } else {
    coin.className="tails";
    tailsScore ++;
    tailsCount.innerHTML = tailsScore;
  }
  coinResult();
}

document.getElementById("flipButton").addEventListener("click", coinFlip);

function coinResult() {
  if (coin.className === "heads") {
    result.innerHTML="Heads";
  } else {
    result.innerHTML="Tails";
  }
}
 
   document.getElementById("resetButton").addEventListener("click", reset);  

  function reset() {
    headsScore = 0;
    headsCount.innerHTML = headsScore;
    tailsScore = 0;
    tailsCount.innerHTML = tailsScore;
  }




