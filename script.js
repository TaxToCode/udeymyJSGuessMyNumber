"use strict";

// 정답 생성기
const rollDice = function () {
    return Number(Math.trunc(Math.random() * 20) + 1);
};
let secretNumber = rollDice();
// document.querySelector('.number').textContent = secretNumber;

// 점수 관리
let score = 20;
let highScore = 0;

// 메세지 출력기
const displayMessage = function (input) {
    document.querySelector(".message").textContent = input;
};

// 판독기
document.querySelector(".check").addEventListener("click", function () {
    //console.log(typeof guess); string으로 나온다 그래서 Number 붙여준다
    const guess = Number(document.querySelector(".guess").value);

    // 아무것도 입력 안했을때
    if (!guess) {
        displayMessage("🥲번호를 입력하고 눌러주세요");
    }
    // 정답 맞췄을때
    else if (guess === secretNumber) {
        displayMessage("😍정답입니다!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        // highscore 기록
        if (score > highScore) {
            document.querySelector(".highscore").textContent = score;
            highScore = score;
        }
    }

    // 입력값이 정답이랑 다를때
    else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber ? displayMessage("정답보다 높아요") : displayMessage("정답보다 낮아요");
            score--;
            document.querySelector(".score").textContent = score;
        } else if (score === 1) {
            score--;
            document.querySelector(".score").textContent = score;
            displayMessage("패배~!");
            document.querySelector("body").style.backgroundColor = "#CB4747";
        }
    }
});

// Again 버튼 관련 작동기능
document.querySelector(".again").addEventListener("click", function () {
    // 스코어 바뀌게
    score = 20;
    document.querySelector(".score").textContent = score;
    // 정답 바뀌게
    secretNumber = rollDice();
    // 입력창 빈 창으로 만들기
    document.querySelector(".guess").value = "";
    // 메세지 초기화
    displayMessage("Start guessing...");
    // 백그라운드 컬러 #222
    document.querySelector("body").style.backgroundColor = "#222";
    // 넘버창 크기
    document.querySelector(".number").style.width = "15rem";
});
