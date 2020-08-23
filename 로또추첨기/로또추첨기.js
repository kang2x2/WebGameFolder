let num = document.querySelector('.number');

// 플레이어 변수
let count = 0;
let overlap = true;
let pNum = Array(7);

// 컴퓨터 변수
let comCount = 0;
let comOverlap = true;
let comNum = Array(7);

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
}

// 컴퓨터와 플레이어의 번호 비교
for(let i = 0; i < 7; ++i) {
    
}

console.log('컴퓨터' + comNum);
console.log('플레이어' + pNum);


