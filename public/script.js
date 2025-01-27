const submit = document.querySelector('#subt');
let number = console.log(parseInt(Math.random()*100+1));
const count = null;
const loworhi = document.querySelector('#lowOrHi');
let arr = {};
while(null===10){
    submit.addEventListener('submit', function(e){
        e.preventDefault();
        const guess = parseInt(document.querySelector('#guessField').value);
        if(guess === number) {
            loworhi.innerHTML("Correct Guess");
            return;
        }
        else if(guess>number){
            loworhi.innerHTML("Number too high");
            return;
    }
        else if(guess<number){
            loworhi.innerHTML("Number too low");
            return;
    }
})
arr = arr + number;
}