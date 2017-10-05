
function startGame(){

var userPick = prompt("Pick rock, paper or scissors?");
var computerPick = Math.random();

    if (computerPick < 0.34) {
    	computerPick = "rock";
    } 
    else if(computerPick <= 0.67) {
    	computerPick = "paper";
    } 
    else {
    	computerPick = "scissors";
    } 


    alert("Computer: " + computerPick);
    


var compare = function(x, y){
    
    if(x === y){
        return "The result is a tie!";
        }
    else if(x === "rock"){
            if(y === "scissors"){
                return "rock wins";
            }
            else{
                return "paper wins";
            }
    }
    else if(x === "paper"){
            if(y === "rock"){
                return "paper wins";
            }
            else{
                return "scissors wins";
            }
    }
    else if(x === "scissors"){
            if(y === "rock"){
                return "rock wins";
            }
            else{
                return "scissors wins";
            }
    }
};

alert(compare(userPick, computerPick));

}

    
    