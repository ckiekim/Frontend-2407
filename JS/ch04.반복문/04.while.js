// while 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];

let index = 0;
while (index < summerFruits.length) {
    console.log(summerFruits[index]);
    index++;                            // 조건을 변화하는 실행문이 반드시 필요함. 없으면 무한 루프
}

// 주사위를 던진 합이 21을 초과할 때 loop 탈출하고
// 그간 던진 주사위 눈을 출력하기
let sumDice = 0;
let diceArray = [];
while (sumDice <= 21) {
    let dice = Math.ceil(Math.random() * 6);
    // console.log(dice);
    diceArray.push(dice);
    sumDice += dice;
}
console.log(diceArray);
console.log(sumDice);
