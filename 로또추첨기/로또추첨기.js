let num = document.getElementById('num');
let title = document.querySelector('.title');

// let n1 = document.getElementsByClassName('n1');
// let n2 = document.getElementsByClassName('n2');
// let n3 = document.getElementsByClassName('n3');
// let n4 = document.getElementsByClassName('n4');
// let n5 = document.getElementsByClassName('n5');
// let n6 = document.getElementsByClassName('n6');
// let n7 = document.getElementsByClassName('n7');


let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let textBox = document.querySelector('.text-box');

let winCount = 0;
/////////////lotto
// 플레이어 변수
let count = 0;
let overlap = true;
let pNum = Array(7);

// 컴퓨터 변수
let comCount = 0;
let comOverlap = true;
let comNum = Array(7);

/////////////연금
// 플레이어 변수
let count2 = 0;
let overlap2 = true;
let pNum2 = Array(6);

// 컴퓨터 변수
let comCount2 = 0;
let comOverlap2 = true;
let comNum2 = Array(6);


///////////////////////// lotto복권
btn1.addEventListener('click', function() {
    event.preventDefault();
    title.innerHTML = '로또복권';
    textBox.innerHTML = '';
// 컴퓨터 번호 뽑기
while(comCount < 7) {
    let comPick = Math.floor(Math.random() * 45 + 1);
    for(let i = 0; i < comCount; ++i) {
        if(comNum[i] === comPick) {
            comOverlap = false;
        }
    }
    if(comOverlap) {
        comNum[comCount] = comPick;
        comCount = comCount + 1;
    }

    comOverlap = true;
}

// 플레이어 번호 뽑기
while(count < 7) {
    let pick = Math.floor(Math.random() * 45 + 1);
    for(let i = 0; i < count; ++i) {
        if(pNum[i] === pick) {
            overlap = false;
        }     
        
    }
    if(overlap) {
        pNum[count] = pick;
        count = count + 1;
    } 

    overlap = true;
    num.innerHTML = pNum;
}



// 컴퓨터와 플레이어의 번호 비교
for(let i = 0; i < 6; ++i) {
    if(pNum.indexOf(comNum[i]) > -1) {
        winCount++;
    }
    console.log(pNum.indexOf(comNum[i]));
}
console.log('컴퓨터' + comNum);
count = 0; // 플레이어가 다시 숫자를 뽑기 위함.

// 결과창
if(winCount === 1) {
    textBox.innerHTML = '기본번호 1개 일치 꽝!';
}
else if(winCount === 2) {
    textBox.innerHTML = '기본번호 2개 일치 꽝!';
}
else if(winCount === 3) {
    textBox.innerHTML = '기본번호 3개 일치 5등!!';
}
else if(winCount === 4) {
    textBox.innerHTML = '기본번호 4개 일치 4등!!!';
}
else if(winCount === 5) {
    textBox.innerHTML = '기본번호 5개 일치 3등!!!!';
}
else if(winCount === 6) {
    textBox.innerHTML = '기본번호 6개 일치 1등!!!!!!';
}
else {
    textBox.innerHTML = '기본번호 0개 일치 꽝!'
}

winCount = 0;
})


///////////////////////// 연금복권
btn2.addEventListener('click', function(event) {
    event.preventDefault();
    title.innerHTML = '연금복권';
    textBox.innerHTML = '';
    // 컴퓨터 번호 뽑기.
    while(comCount2 < 6) {
        let comPick = Math.floor(Math.random() * 45 + 1);
        for(let i = 0; i < comCount2; ++i) {
            if(comNum2[i] === comPick) {
                comOverlap2 = false;
            }
        }
        if(comOverlap2) {
            comNum2[comCount2] = comPick;
            comCount2 = comCount2 + 1;
        }
    
        comOverlap2 = true;
    }
    
    // 플레이어 번호 뽑기
    while(count2 < 6) {
        let pick = Math.floor(Math.random() * 45 + 1);
        for(let i = 0; i < count2; ++i) {
            if(pNum2[i] === pick) {
                overlap2 = false;
            }     
        }
        if(overlap2) {
            pNum2[count2] = pick;
            count2 = count2 + 1;
        } 
    
        overlap2 = true;
        num.innerHTML = pNum2;
    }

    // 컴퓨터와 플레이어의 번호 비교
    for(let i = 0; i < 6; ++i) {
        if(pNum2[i] === comNum2[i]) {
            winCount++;
        }
        console.log(pNum2, comNum2);
    }
    console.log('컴퓨터' + comNum2);
    count2 = 0; // 플레이어가 다시 숫자를 뽑기 위함.

    // 결과창
    if(winCount === 1) {
        textBox.innerHTML = '기본번호 1개 일치 꽝!';
    }
    else if(winCount === 2) {
        textBox.innerHTML = '기본번호 2개 일치 꽝!';
    }
    else if(winCount === 3) {
        textBox.innerHTML = '기본번호 3개 일치 5등!!';
    }
    else if(winCount === 4) {
        textBox.innerHTML = '기본번호 4개 일치 4등!!!';
    }
    else if(winCount === 5) {
        textBox.innerHTML = '기본번호 5개 일치 3등!!!!';
    }
    else if(winCount === 6) {
        textBox.innerHTML = '기본번호 6개 일치 1등!!!!!!';
    }
    else {
        textBox.innerHTML = '기본번호 0개 일치 꽝!'
    }

    winCount = 0;
})


