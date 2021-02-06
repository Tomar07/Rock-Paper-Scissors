let userScore= 0;
let computerScore= 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div= document.querySelector(".message");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissor_div= document.getElementById("Scissor");

function convertToWord(letter){
    if(letter=="r") return "Rock"
    if(letter=="p") return "Paper"
    return "Scissors"

}
function getComputerChoice() {
    const choices = ["r","p","s"];
    const result= Math.floor(Math.random()*3);
  
    return choices[result];
}
function win(UserChoice,comp){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const smalluser= "user".fontsize(3).sub();
    const smallcomp= "comp".fontsize(3).sub();
    result_div.innerHTML= convertToWord(UserChoice) + smalluser  + " beats " +convertToWord( comp) +smallcomp + ". You win!!"
    // document.getElementById(UserChoice).classList.add('greenglow');
}
function lose(user,comp){
    computerScore++;
    computerScore_span.innerHTML= userScore;
    userScore_span.innerHTML= computerScore;
    const smalluser= "user".fontsize(3).sub();
    const smallcomp= "comp".fontsize(3).sub();
    result_div.innerHTML= convertToWord(user) + smalluser  + " loses " +convertToWord( comp) +smallcomp + ". You Lost!!"
}
function draw(user,comp){
    
    const smalluser= "user".fontsize(3).sub();
    const smallcomp= "comp".fontsize(3).sub();
    result_div.innerHTML= convertToWord(user) + smalluser  + " equals " +convertToWord( comp) +smallcomp + ". It's a Draw!!"
}

function game(UserChoice){
    const computer= getComputerChoice();
    switch(UserChoice+computer){
        case'rs':
        case'pr':
        case'sp':
            win(UserChoice,computer);
            break;
        case'rp':
        case'ps':
        case'sr':
            lose(UserChoice,computer);
            break;
        case'rr':
        case'pp':
        case'ss':
            draw(UserChoice,computer);
            break;
    }
}
 

    rock_div.addEventListener('click',function(){
        game("r");
        
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissor_div.addEventListener('click',function(){
        game("s");
    })

