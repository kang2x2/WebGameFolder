let problem = document.querySelector('.problem');
let form = document.querySelector('.form');
let input = document.querySelector('.in');
let nav = document.querySelector('.nav');

let oCount = document.querySelector('.oCount');
let xCount = document.querySelector('.xCount');

oCount.innerHTML = 0;
xCount.innerHTML = 0;

let num1 = Math.floor(Math.random() * 9) + 1;
let num2 = Math.floor(Math.random() * 9) + 1;
problem.innerHTML = num1 + ' x ' + num2; 
let result = num1 * num2;

form.addEventListener('submit', function ex(event) {
        console.log(result);
        event.preventDefault();
        if(Number(result) === Number(input.value)) {
            nav.innerHTML = "정답!" + result;      
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * 9) + 1;
            problem.innerHTML = num1 + ' x ' + num2; 
            result = num1 * num2;

            oCount.innerHTML = Number(oCount.innerHTML) + 1;
            console.log(oCount);

            input.value = '';
            input.focus();
        }
        else {
            nav.innerHTML = "오답!";

            xCount.innerHTML = Number(xCount.innerHTML) + 1;  
            console.log(xCount.innerHTML);
            input.value = '';
            input.focus();
        }

})