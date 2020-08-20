let num = document.querySelector('.number');

let showNum;
let loopNum = [];
let answer = [];

// 45개의 번호 저장.
for(let i = 1; i <= 45; ++i) {
    loopNum.push(i);
}
console.log(loopNum);

// 컴퓨터가 6개의 번호 + 보너스 번호 1개 저장.
for(let i = 0; i < 6; ++i) {

}

// 돌아가는 번호
function temp() {
   showNum = Math.floor(Math.random() * 45 + 1);
}

showTemp = setInterval(function(){  
    temp();
    num.innerHTML = showNum;
}, 100);




