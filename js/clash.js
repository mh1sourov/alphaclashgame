


function handleKeyboardButtonPressed(event){
    // console.log("button Pressed")?
let playerPressed = event.key;

console.log("player Pressed",playerPressed);

let displayedAlphabet = document.getElementById("screenAlphabet");
let showedAlphabet = (displayedAlphabet.innerText);
console.log(showedAlphabet);

if(playerPressed === showedAlphabet){
    // console.log("Claps Claps you successfully pressed right Button")
   
    continueGame()
    let specificKey = document.getElementById(playerPressed);
    specificKey.classList.remove("bg-pink-700")
    console.log(elementID);

}
else{
console.log("Try Again");
}


}

document.addEventListener("keyup", handleKeyboardButtonPressed)




// first part
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
