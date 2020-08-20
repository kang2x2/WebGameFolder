let table = document.querySelector('.table'); //테이블가져옴
let nav = document.querySelector('.nav');
let btn = document.querySelector('.btn');

let trs = []; //tr(줄)을 배열에 넣기 위함.
let tds = []; //td(칸)을 배열에 넣기 위함.
let turn = 'X'; //턴

let numArray = [0,1,2];
let comTr = [];
let comTd = [];

for(let i = 0; i < 3; ++i) {
    let pick = numArray.splice(Math.floor(Math.random() * 3), 0);
    comTr.push(pick);

    console.log(comTr,pick);
}



function clickEvent(event) {
    console.log(event.target); // 이벤트가 일어난 곳의 위치
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode);

    // 현재 줄을 찾기(내가 클릭한 칸의 부모(줄))
    let curTr = trs.indexOf(event.target.parentNode);
    console.log(curTr);
    // 현재 칸을 찾기(칸[현재줄]의 클릭한 칸)
    let curTd = tds[curTr].indexOf(event.target);
    console.log(curTd); 

    // 현재위치(칸들[현재줄][현재칸])
    let curPos = tds[curTr][curTd];

    if(curPos.textContent !== '') { //빈칸이 아닐 시
        console.log('빈칸아님');
    }
    else { //빈칸일 시
        console.log('빈칸');
        curPos.textContent = turn;

    // 세칸을 다 채웠는가?
    let three = false;
    // 가로줄
    if(tds[curTr][0].textContent === turn && 
       tds[curTr][1].textContent === turn && 
       tds[curTr][2].textContent === turn) {
        three = true;
    }
    // 세로줄
    if(tds[0][curTd].textContent === turn &&
       tds[1][curTd].textContent === turn &&
       tds[2][curTd].textContent === turn) {
        three = true;
    }
    // 대각선
    if(curTr - curTd === 0) {
        if(tds[0][0].textContent === turn &&
           tds[1][1].textContent === turn &&
           tds[2][2].textContent === turn ) {
            three = true;
        }
    }
    if( Math.abs(curTr - curTd) === 2) {
        if(tds[0][2].textContent === turn &&
           tds[1][1].textContent === turn &&
           tds[2][0].textContent === turn ) {
             three = true;
           }
    }
    // 3칸채웠을 시
    if(three) {
        nav.innerHTML = `${turn}님의 승리!`
        // 초기화 코드
        turn = 'X';
        btn.classList.remove('hide');
        btn.addEventListener('click', function(event) {
            tds.forEach(function(jull){
                jull.forEach(function(kan){
                    kan.textContent = '';
                })
            })   
            btn.classList.add('hide');   
            nav.innerHTML = '원하는 땅을 클릭하세요.'      
        })

    }
    else {
        if(turn === 'X') {
            turn = 'O';
        }
        else {
            turn = 'X';
        }
    }
}
}

// 3x3 배열 생성
for(let i = 0; i < 3; ++i) {
    let tr = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for(let j = 0; j < 3; ++j) {
        let td = document.createElement('td');
        tds[i].push(td);
        tr.appendChild(td);

        td.addEventListener('click', clickEvent)
    }
    table.appendChild(tr);
}


