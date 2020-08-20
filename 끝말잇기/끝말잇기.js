let word = document.querySelector('.word');
let input = document.querySelector('.in');
let button = document.querySelector('.btn');
let form = document.querySelector('.form');
let nav = document.querySelector('.nav');

let oCount = document.querySelector('.oCount');
let xCount = document.querySelector('.xCount');

oCount.innerHTML = 0;
xCount.innerHTML = 0;

input.focus();

form.addEventListener('submit', function ex(e) {
    e.preventDefault();
    if(word.innerHTML[word.innerHTML.length - 1] === input.value[0]
        && input.value.length <= 3 && input.value.length >= 2)  {
        word.innerHTML = input.value;
        oCount.innerHTML = Number(oCount.innerHTML) + 1;
        nav.innerHTML = "정답!";
        input.value = '';
        input.focus();
    }
    else if (input.value.length <= 1 || input.value.length >= 4) {
        console.log(input.value.length);
        nav.innerHTML = "2글자와 3글자만 입력 가능합니다.";
        input.value = '';
        input.focus();
    }
    else {
        nav.innerHTML = "오답!";
        xCount.innerHTML = Number(xCount.innerHTML) + 1;
        input.value = '';
        input.focus();
    }   
})
