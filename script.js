// All Variables

var num = document.querySelector('#no');
var submit = document.querySelector("#submit");
var remain = document.querySelector("#remain");
var lowHi = document.querySelector("#low-Hi");
var guesses = document.querySelector("#guesses");
var guessBlock = document.querySelector(".guess-block");
var reset = document.querySelector("#reset");
var i = 10;

// Generating the random number
var random = Math.random() * 100;
random = Math.floor(random);
console.log(random);

// Call event on every button click
submit.addEventListener("click", guessthenumber);

// Initializing total remaining attempts
remain.textContent = "10";

// guessthenumber method
function guessthenumber() {
    let userNum = num.value;
    guesses.textContent += userNum + " ";
    guessBlock.style.display = "block";

    if (userNum == "") {
        lowHi.textContent = "You have not entered any number! Try Again!!";
        lowHi.style.color = "orange";
        guessBlock.style.display = "none";
    }
    else if (userNum < random) {
        lowHi.textContent = "Your guess is too low";
        lowHi.style.color = "orange";
        i--;
        remain.textContent = i;
    }
    else if (userNum > random) {
        lowHi.textContent = "Your guess is too high";
        lowHi.style.color = "orange";
        i--;
        remain.textContent = i;
    }
    else {
        lowHi.textContent = "Congrats! You WON!!";
        lowHi.style.color = "white";
        document.querySelector(".low-Hi").style.backgroundColor = "green";
        remain.textContent = "You dont need them now ;)";
        remain.style.color = "#FFB72D";
        remain.style.fontSize = "12px";
    }


    // disable game after end of all attempts
    if (i <= 0) {
        remain.textContent = 0;
        num.disabled = true;
        lowHi.textContent = "Oh! Game Over!!";
        lowHi.style.color = "white";
        document.querySelector(".low-Hi").style.backgroundColor = "red";
        guesses.style.display = "none";
        guessBlock.style.display = "block";guessBlock.style.display = "block";
        reset.style.display = "block";
        reset.addEventListener("click", resetgame);

    }

}

function resetgame() {
    i = 10;
    useeNum = null;
    lowHi.textContent = "Please enter your first guess!";
    document.querySelector(".low-Hi").style.backgroundColor = "#37394E"; 
    reset.style.display = "none";
    remain.textContent = "10";
    num.disabled = false;
    num.value = "";
    reset.style.display = "none";
    guesses.style.display = "block";
    guesses.textContent = " ";
    guessBlock.style.display = "none";
}