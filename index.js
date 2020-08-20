let a1 = document.querySelector('.a-1');
let a2 = document.querySelector('.a-2');
let a3 = document.querySelector('.a-3');
let a4 = document.querySelector('.a-4');
let a5 = document.querySelector('.a-5');

a1.addEventListener('click', function(event){
    event.preventDefault();
    setTimeout(function() {
        location.href = './구구단/구구단.html';
    }, 1000);
})

a2.addEventListener('click', function(event){
    event.preventDefault();
    setTimeout(function() {
        location.href = './끝말잇기/끝말잇기.html';
    }, 1000);
})

a3.addEventListener('click', function(event){
    event.preventDefault();
    setTimeout(function() {
        location.href = './숫자야구/숫자야구.html';
    }, 1000);
})

a4.addEventListener('click', function(event){
    event.preventDefault();
    setTimeout(function() {
        location.href = './틱택토/틱택토.html';
    }, 1000);
})

a5.addEventListener('click', function(event){
    event.preventDefault();
    setTimeout(function() {
        location.href = './로또추첨기/로또추첨기.html';
    }, 1000);
})
