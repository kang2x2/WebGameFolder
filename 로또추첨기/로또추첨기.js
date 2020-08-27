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

let numBord = document.getElementById('num-bord');

// 적은 코드로 html에 숫자들을 출력하기 위한 배열
let htmlComArray = [comN1, comN2, comN3, comN4, comN5, comN6];
let htmlPlayerArray = [playerN1, playerN2, playerN3, playerN4, playerN5, playerN6];

// 버튼
let btn1 = document.getElementById('btn1');

// 
let text = document.querySelector('.text-box');

// js장치들
let overlap = false;
let bonusOverlap = false;
let comOverlap = false;
let borderBold = false;
let startSwitch = true;

// js숫자들
let pNumArray = Array(6);
let cNumArray = Array(6);
let bonusNum = 0;

/////////////////////////////////////////////////// 

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

// 보여지는 번호 돌리기
function showTemp() {
    let showNum = Math.floor(Math.random() * 45 + 1);
    inHtml(numBord, showNum); 
    color(numBord, showNum);  
}

// 최초 추첨 전 보여지는 번호 돌리기
let startTemp = setInterval(showTemp, 100);

///////////////////////////////////////////////////   

// 로또복권 
btn1.addEventListener('click', function(event) {
    event.preventDefault();
    // 추첨 후 최초에 계속 돌아가던 번호 돌리기 멈추기 위함.
    clearInterval(startTemp);
    // 번호 돌리기
    let tempButton = setInterval(showTemp, 100);

    // 번호를 다시 뽑을때 바뀌기 전 번호가 보이지 않도록
    playerBonus.classList.remove('show');
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

    // 플레이어 번호 html에 출력
    for(let i = 0; i < 6; ++i) {
        setTimeout(function() {
            inHtml(htmlPlayerArray[i],pNumArray[i]);
            color(htmlPlayerArray[i],pNumArray[i]);
        }, 200 * i);
    }
    setTimeout(function() {
        plusIcon.innerHTML = '+';
        plusIcon.classList.remove('hide');
    }, 1200);
    setTimeout(function() {
        inHtml(playerBonus, bonusNum);
        color(playerBonus, bonusNum);
    }, 1400)
    
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

    // 컴퓨터의 숫자 html에 띄우기
    for(let i = 0; i < 6; ++i) {
        setTimeout(function() {
        inHtml(htmlComArray[i], cNumArray[i]);
        color(htmlComArray[i], cNumArray[i]);  
        // 번호 돌리기 중지 후 컴퓨터의 마지막 번호 넣기
        clearInterval(tempButton);   
        numBord.innerHTML = bonusNum;    
        color(numBord, bonusNum);
        }, 1500);

    }

/////////////////////////////////////////////////// 

    // 정답 비교
    let winCount = 0;
    let bonusCount = 0;
    console.log(winCount, bonusCount)

    for(let i = 0; i < 6; ++i) {
        // 다시 추첨했을때 테두리가 남아있음을 방지.
        htmlComArray[i].classList.remove('show');
        htmlPlayerArray[i].classList.remove('show');
        // 맞는 번호가 있을 시 플레이어의 번호에 테두리 색칠 및 카운트 증가.
        if(cNumArray.indexOf(pNumArray[i]) > -1) {
            winCount++;   
            htmlPlayerArray[i].classList.add('show');
        }
        // 보너스번호 카운트 증가 및 색칠
        if(bonusNum === cNumArray[i]) {
            bonusCount = bonusCount + 1;
            playerBonus.classList.add('bonus-show');
            htmlComArray[i].classList.add('bonus-show');
        }
        // 컴퓨터 번호 맞을 시 색칠.
        for(let j = 0; j < 6; ++j) {
            if(pNumArray.indexOf(cNumArray[j]) > -1) {
                htmlComArray[j].classList.add('show');
            }
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

});











