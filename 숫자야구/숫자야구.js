let form = document.querySelector('.form');
let input = document.querySelector('input');
let text = document.querySelector('h2');

let sCount = document.querySelector('.strike-count');
let bCount = document.querySelector('.ball-count');
let oCount = document.querySelector('.out-count');
let gCount = document.querySelector('.game-count');

let nav = document.querySelector('.nav');

var bool = true;

let num;
let numArray;

function temp() {
    num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArray = [];
    for(let i = 0; i < 3; ++i){
        let pick = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numArray.push(pick);
    }
}

temp();

input.focus();
input.maxLength = 3;

let gameCount = 9;

function game() {
    form.addEventListener('submit', function(event){
        nav.innerHTML = '숫자를 입력하세요.'
        gameCount -= 1;
        event.preventDefault();
        // console.log(numArray.join(''), input.value, numArray.join('') === input.value);
        // 정답이 맞을 때
        if(numArray.join('') === input.value) {
            input.value ='';
            text.innerHTML = '홈런!!' + numArray;
            gameCount = 9;
            input.focus();
            temp();
            console.log(numArray);
            gCount.innerHTML = gameCount;
            nav.innerHTML = '정답이 초기화 되었습니다.'
        }

        else if(gameCount === 0) {
            text.innerHTML = `게임 끝! 정답은 ${numArray} 입니다.` + '정답이 초기화 되었습니다.';
            
        }
  
        // 정답이 틀릴 때
        else {
            input.focus();
            text.innerHTML = '* * *';
            let strike = 0;
            let ball = 0;
            let out = 0;
            for(let j = 0; j < 3; ++j) {
                if (numArray[j] === Number(input.value[j])) {
                    strike += 1;
                }
                else if(numArray.indexOf(Number(input.value[j])) > -1) {
                    ball += 1;
                }
                else {
                    out += 1;
                }
                sCount.innerHTML = strike;
                bCount.innerHTML = ball;
                oCount.innerHTML = out;
                gCount.innerHTML = gameCount;
            }
            input.value = '';
        }
    })
}

if(bool){
    game();
}









