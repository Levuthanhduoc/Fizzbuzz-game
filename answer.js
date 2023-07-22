const fizzbox = document.getElementById("fizzbox");
let anchor = document.getElementById("answser-show-here");
const answer_button = document.getElementById("answer-button");
let start_num = 0,check;
function game(user_answer) {
    check = checkuser_answer(fizzbuzzcheck(start_num),user_answer);
    Answer(check);
    start_num+=1;  
    answer_button.innerHTML = "Next number: " + start_num; 
}
function Answer(number){
    number = fizzbuzzcheck(number);
    let para = document.createElement("p");
    para.textContent = number;
    fizzbox.insertBefore(para,anchor);
}
function fizzbuzzcheck(num) {
    if(num%5 == 0 && num%3 == 0){
        return num = "fizzbuzz";
    }
    else if (num%3 == 0) {
        return num = "fizz";
    }
    else if (num%5 == 0){
        return num ="buzz"
    }
    else {return num;}
}
function checkuser_answer(ans,user){
    if(ans == user)
    {
        return ans;
    }
    else {return "you lose" }
}
function unadd() {
    let child = fizzbox.querySelectorAll("p"); /*select all P return node list */
    child.forEach(box =>{box.remove();}); /** use foreach to remove 1 at the time */
}
function restart() {
    start_num = 0;
    answer_button.innerHTML = "Next number: " + start_num;
    Answer("let start againt");
}
function updateScroll(){
    let element = document.getElementById("fizzbox");
    element.scrollTop = element.scrollHeight;
}
setInterval(updateScroll,1000);
game("fizzbuzz");