// 로또 번호
let playerN1 = document.getElementById('pN1');
let playerN2 = document.getElementById('pN2');
let playerN3 = document.getElementById('pN3');
let playerN4 = document.getElementById('pN4');
let playerN5 = document.getElementById('pN5');
let playerN6 = document.getElementById('pN6');
let plusIcon = document.getElementById('plus');
let playerBonus = document.getElementById('pBonus');

let comN1 = document.getElementById('cN1');
let comN2 = document.getElementById('cN2');
let comN3 = document.getElementById('cN3');
let comN4 = document.getElementById('cN4');
let comN5 = document.getElementById('cN5');
let comN6 = document.getElementById('cN6');


// 버튼
let btn1 = document.getElementById('btn1');

// 
let text = document.querySelector('.text-box');

// js장치들
let overlap = false;
let bonusOverlap = false;
let comOverlap = false;

// js숫자들
let pNumArray = Array(6);
let cNumArray = Array(6);
let bonusNum = 0;

// 로또복권 
btn1.addEventListener('click', function(event) {
    event.preventDefault();
    // 번호를 다시 뽑을때 바뀌기 전 번호가 보이지 않도록
    text.innerHTML = ' ';
    hide(playerN1), hide(playerN2), 
    hide(playerN3), hide(playerN4), hide(playerN5),
    hide(playerN6), hide(plusIcon), hide(playerBonus),
    hide(comN1), hide(comN2), hide(comN3),
    hide(comN4), hide(comN5), hide(comN6);

    // 중복 수 제외하며 6개 번호 뽑기.
    for(let i = 0; i < 6; ++i) {
        let playerPick = Math.floor(Math.random() * 45 + 1);
        if(pNumArray.indexOf(playerPick) > -1) {
            overlap = true;
            i--;
        }
        else if(!overlap) {
            pNumArray[i] = playerPick;
        }
        overlap = false;
    }

    //보너스 번호 뽑기
    let escape = 0;
    while(escape < 1) {
        let bonusPick = Math.floor(Math.random() * 45 + 1);
        // 보너스 번호가 이미 뽑은 6개의 번호 중 하나와 중복일 때
        if(pNumArray.indexOf(bonusPick) > -1) {
            bonusOverlap = true;
            console.log(bonusPick, '중복!')
        }
        else if(!bonusOverlap) {
            bonusNum = bonusPick;
            escape++;
        }
        bonusOverlap = false;
    }





    // html에 번호 삽입.
    setTimeout(function() {
        inHtml(playerN1, pNumArray[0]);
        color(playerN1, pNumArray[0]);
    }, 100);
    setTimeout(function() {
        inHtml(playerN2, pNumArray[1]);
        color(playerN2, pNumArray[1]);
    }, 300);
    setTimeout(function() {
        inHtml(playerN3, pNumArray[2]);
        color(playerN3, pNumArray[2]);
    }, 500);
    setTimeout(function() {
        inHtml(playerN4, pNumArray[3]);
        color(playerN4, pNumArray[3]);
    }, 700);
    setTimeout(function() {
        inHtml(playerN5, pNumArray[4]);
        color(playerN5, pNumArray[4]);
    }, 900);
    setTimeout(function() {
        inHtml(playerN6, pNumArray[5]);
        color(playerN6, pNumArray[5]);
    }, 1100);
    setTimeout(function() {
        plusIcon.innerHTML = '+';
        plusIcon.classList.remove('hide');
    }, 1300);
    setTimeout(function() {
        inHtml(playerBonus, bonusNum);
        color(playerBonus, bonusNum);
    }, 1300)
    
///////////////////////////////////////////////////   

    // 컴퓨터 번호뽑기.
    for(let i = 0; i < 6; ++i) {
        let comPick = Math.floor(Math.random() * 45 + 1);
        if(cNumArray.indexOf(comPick) > -1) {
            comOverlap = true;
            i--;
        }
        if(!comOverlap) {
            cNumArray[i] = comPick;
        }
        comOverlap = false;
    }

    setTimeout(function() {
        inHtml(comN1, cNumArray[0]);
        color(comN1, cNumArray[0]);
        inHtml(comN2, cNumArray[1]);
        color(comN2, cNumArray[1]);
        inHtml(comN3, cNumArray[2]);
        color(comN3, cNumArray[2]);
        inHtml(comN4, cNumArray[3]);
        color(comN4, cNumArray[3]);
        inHtml(comN5, cNumArray[4]);
        color(comN5, cNumArray[4]);
        inHtml(comN6, cNumArray[5]);
        color(comN6, cNumArray[5]);
    }, 1500)


    // 정답 비교
    let winCount = 0;
    let bonusCount = 0;
    for(let i = 0; i < 6; ++i) {
        if(pNumArray[i] === cNumArray[i]) {
            winCount = winCount + 1;
        }
        if(bonusNum === cNumArray[i]) {
            bonusCount = bonusCount + 1;
        }
    }
    console.log(winCount, bonusCount);

    // 결과
    setTimeout(function(){
        // 5등
        if(winCount === 3) {
            text.innerHTML = '기본번호 3개 번호 일치 5등!';
        }
        // 4등
        else if(winCount === 4) {
            text.innerHTML = '기본번호 4개 번호 일치 4등!!.';
        }
        // 3등
        else if(winCount === 5) {
            text.innerHTML = '기본번호 5개 번호 일치 3등!!!';
        }
        // 2등
        else if(winCount === 5 && bonusCount === 1){
            text.innerHTML = '기본번호 5개와 보너스 번호 일치 2등!!!!'
        }
        // 1등
        else if(winCount === 6) {
            text.innerHTML = '기본번호 6개 일치 1등!!!!!';
        }
        // 꽝
        else {
            text.innerHTML = '기본번호 3개 미만일치로 꽝입니다.';
        }
    }, 1500);
    // 점수 초기화
});





// 함수들

// 다시돌릴때 값이 남아있지 않도록 안보이게
function hide(hn) {
    hn.classList.add('hide');
}

// html에 번호 넣기
function inHtml(hn, jn) {
    hn.innerHTML = jn;
    hn.classList.remove('hide');
}

// 공 색상 함수
function color(hn, jn) {
    if(jn <= 10) {
        hn.classList.add('yellow');
        hn.classList.remove('blue');
        hn.classList.remove('red');
        hn.classList.remove('gray');
        hn.classList.remove('green');
    }
    else if(jn >= 11 && jn <=20) {
        hn.classList.add('blue');
        hn.classList.remove('yellow');
        hn.classList.remove('red');
        hn.classList.remove('gray');
        hn.classList.remove('green');
    }
    else if(jn >= 21 && jn <= 30) {
        hn.classList.add('red');
        hn.classList.remove('yellow');
        hn.classList.remove('blue');
        hn.classList.remove('gray');
        hn.classList.remove('green');        
    }
    else if(jn >= 31 && jn <= 40) {
        hn.classList.add('gray');
        hn.classList.remove('yellow');
        hn.classList.remove('blue');
        hn.classList.remove('red');
        hn.classList.remove('green');        
    }
    else {
        hn.classList.add('green');
        hn.classList.remove('yellow');
        hn.classList.remove('blue');
        hn.classList.remove('red');
        hn.classList.remove('gray');          
    }
}







