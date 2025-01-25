
let string = "abcdefghijklmnopqrstuvwxyz"
function continueGame(){



let alphabets = string.split("");

let randomNumber = Math.random()*25;
let number = Math.round(randomNumber);
// console.log(number);

let alphabet  = alphabets[number];

console.log(alphabet);

document.getElementById("screenAlphabet").innerText = alphabet
setBackgroundColor(alphabet)


}

function playNow(){
    const homeSec = document.getElementById("homeSection")
        homeSec.classList.add("hidden")

        const playGround = document.getElementById("playgroundSec");
        playGround.classList.remove("hidden")

        continueGame();
        
}


function setBackgroundColor(elementID){
let specificKey = document.getElementById(elementID);
specificKey.classList.add("bg-pink-700")
}
