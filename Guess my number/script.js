'use strict'

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(guess , typeof guess)

if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    
    if (score > highscore){
        score  = highscore;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if (!guess){
    document.querySelector('.message').textContent = 'No Number!🙈';
} else if (guess > secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent = 'Too High🙉';
    score--;
    document.querySelector('.score').textContent = score; 
    } else {
        document.querySelector('.message').textContent = 'You have lost the game😖';
    }
    }else if(guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too Low🙉';
        score--;
        document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = 'You have lost the game😖';
            document.querySelector('.score').textContent = 0;
        }
}

} ); 
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
});