const user1Choice = prompt("Choose rock, paper, scissors");
const user2Choice = prompt("Choose rock, paper, scissors");

if(user1Choice && user2Choice){
    console.log(`user1: ${user1Choice} and user2: ${user2Choice}`)
}else{
    console.log("You Confirm a Invalid Value")
}

if (user1Choice === user2Choice){
    alert(`userChoice is ${user1Choice} and user2Choice is ${user2Choice} And It's a tie <3`)
} else if (user1Choice == 'rock'){
    if (user2Choice == 'scissors'){
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user1 win :) `)
    } else {
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user2 win :( `)
    }
} else if(user1Choice == 'paper'){
    if (user2Choice == 'rock'){
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user1 win :)`)
    } else {
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user2 win:(`)
    }
} else if(user1Choice == 'scissors'){
    if (user2Choice == 'paper'){
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user1 win :) `)
    } else {
        alert(`user1Choice is ${user1Choice} and user2Choice is ${user2Choice} And user2 win:(`)
    }
}