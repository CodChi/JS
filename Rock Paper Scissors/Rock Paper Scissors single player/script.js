const objects = ['rock', 'paper', 'scissors']
const userChoice = prompt("Choose rock, paper, scissors");

if(userChoice){
    console.log(`Your chooses: ${userChoice}`)
}else{
    console.log("You Confirm a Invalid Value")
}

const number = Math.floor(Math.random() * 3);
const computerChoice = objects[number];

console.log(`Computer chooses: ${computerChoice}`);
if (objects.includes(userChoice)){
if (userChoice === computerChoice){
    alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And It's a tie <3`)
} else if (userChoice == 'rock'){
    if (computerChoice == 'scissors'){
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You win :) `)
    } else {
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You lose :( `)
    }
} else if(userChoice == 'paper'){
    if (computerChoice == 'rock'){
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You win :)`)
    } else {
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You lose:(`)
    }
} else if(userChoice == 'scissors'){
    if (computerChoice == 'paper'){
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You win :) `)
    } else {
        alert(`userChoice is ${userChoice} and computerChoice is ${computerChoice} And You lose:(`)
    }
}} else {alert("You are stupid :)" )}