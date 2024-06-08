const array = ["rock","paper","scissor"];
const userscore = {
    wins :0,
    loss :0,
    tie:0,
}
const buttons = document.querySelectorAll('button');
const scorecard = document.getElementById('scorecard');
buttons.forEach(button => {
button.addEventListener("click",function(event){
scoreboard1 = document.getElementById('wins');
scoreboard2 = document.getElementById('loss');
scoreboard3 = document.getElementById('tie');

usermove = event.target.value;
const randomNumber = Math.floor(Math.random() * 3);
computerMove = array[randomNumber];
console.log(usermove);
console.log(computerMove);
/*if(usermove == 'rock') {
if(computerMove == 'paper' ) {
    scorecard.innerText = "Computer Wins";
    userscore.loss +=1;
    scoreboard1.innerHTML = userscore.loss;
}
else if (computerMove == 'scissor') {
    scorecard.innerText = "User Wins";
    userscore.wins +=1;
    scoreboard2.innerHTML = userscore.wins;
}
else {
    scorecard.innerText = "It's a Tie";
    userscore.tie +=1;
    scoreboard3.innerHTML = userscore.tie;
}
}
else if (usermove == 'paper') {
if(computerMove == 'scissor' ) {
    scorecard.innerText = "Computer Wins";
    userscore.loss +=1;
    scoreboard1.innerHTML = userscore.loss;
}
else if (computerMove == 'rock') {
    scorecard.innerText = "User Wins";
    userscore.wins +=1;
    scoreboard2.innerHTML = userscore.wins;
}
else {
    scorecard.innerText = "It's a Tie";
    userscore.tie +=1;
    scoreboard3.innerHTML = userscore.tie;

}
}
else{
if(computerMove == 'rock' ) {
    scorecard.innerText = "Computer Wins";
    userscore.loss +=1;
    scoreboard1.innerHTML = userscore.loss;
}
else if (computerMove == 'paper') {
    scorecard.innerText = "User Wins";
    userscore.wins +=1;
    scoreboard2.innerHTML = userscore.wins;

}
else {
    scorecard.innerText = "It's a Tie";
    userscore.tie +=1;
    scoreboard3.innerHTML = userscore.tie;

}
} */
if(usermove == 'rock'){  
    if(computerMove == 'paper'){
        console.log('computer won');  
        scorecard.innerText = "Computer Won";
        userscore.loss +=1;
        scoreboard2.innerHTML = userscore.loss;
    }
    else if(computerMove == 'scissor'){
    console.log('user won');  
    scorecard.innerText = "User won";
    userscore.wins +=1;
    scoreboard1.innerHTML = userscore.wins;
    }
    else{
        console.log('tie');
        scorecard.innerText = "Tie";
        userscore.tie +=1;
        scoreboard3.innerHTML = userscore.tie;
    }
}
else if(usermove == 'paper'){
    if(computerMove == 'scissor'){
        console.log('computer won');
        scorecard.innerText = "Computer Won";
        userscore.loss +=1;
        scoreboard2.innerHTML = userscore.loss;  
    }
    else if(computerMove == 'rock'){
    console.log('user won');  
    scorecard.innerText = "User won";
    userscore.wins +=1;
    scoreboard1.innerHTML = userscore.wins;
    }
    else{
        console.log('tie');
        scorecard.innerText = "Tie";
        userscore.tie +=1;
        scoreboard3.innerHTML = userscore.tie;
    }

}
else{
    if(computerMove == 'rock'){
        console.log('computer won');  
        scorecard.innerText = "Computer Won";
        userscore.loss +=1;
        scoreboard2.innerHTML = userscore.loss;
    }
    else if(computerMove == 'paper'){
    console.log('user won');  
    scorecard.innerText = "User won";
    userscore.wins +=1;
    scoreboard1.innerHTML = userscore.wins;
    }
    else{
        console.log('tie');
        scorecard.innerText = "Tie";
        userscore.tie +=1;
        scoreboard3.innerHTML = userscore.tie;
    }
}
});
});
