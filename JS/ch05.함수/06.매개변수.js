// 매개변수값을 입력하지 않고 호출하는 경우
function printFruit(name, count) {
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('참외', 5);
printFruit('복숭아');

function printFruit2(name, count) {
    if (typeof count == 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit2('복숭아');

function printFruit3(name, count) {
    count = count ? count : 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit3('복숭아');

// 기본 매개변수
// default 값 지정 - 매개변수값을 지정하지 않으면 디폴트 값으로 설정
function printFruit4(name, count = 0) {
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit4('복숭아', 3);
printFruit4('복숭아');

// 가변 매개변수
// ... : rest operator, 나머지의 의미
function sample(x, ...items) {         // items는 함수 안에서 배열처럼 사용할 수 있음
    console.log(x, items);
}
sample(1, 2);
sample(1, 2, 3, 4);
